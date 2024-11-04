const prompt = require('prompt-sync')()

class get_number_wrap {
    /**
     * @type {number}
     */
    static classes_amount = 0;
    constructor() {
        if (get_number_wrap.classes_amount === 0) {
            get_number_wrap.classes_amount++;
        } else {
            throw new Error("Ошибка! Один экземпляр уже существует и его достаточно!");
        }
    }
    /**
     * @param {string} mb_number
     * @return {boolean}
     */
    static is_number(mb_number) {
        var tmp = Number(mb_number)
        return ((mb_number !== "") && !isNaN(tmp) && isFinite(tmp))
    }
    /**
     * @param {string} question
     * @return {number}
     */
    get(question) {
        var answer = ""
        var first_interaction = true
        do {
            if (!first_interaction) {
                console.log("Введённое вами не является номером. Повторите ввод!")
            }
            answer = prompt(question)
            first_interaction = false
        } while (!get_number_wrap.is_number(answer))
        return Number(answer)
    }
}

module.exports.get_number_wrap = get_number_wrap