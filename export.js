const fs = require("fs") // модуль для работы с файловой системой
const prompt = require('prompt-sync')() // функция для получения ввода с клавиатуры

class file_writer {
    /**
     * @type {number}
     */
    static classes_amount = 0;
    constructor() {
        if (file_writer.classes_amount === 0) {
            file_writer.classes_amount++;
        } else {
            throw new Error("Ошибка! Один экземпляр уже существует и его достаточно!");
        }
    }
    /**
     * @return {string}
     */
    #enter_filename() { // метод для запроса имени файла
        var tmp = ""
        var first_interaction = true
        do {
            if (!first_interaction) {
                console.log("Введённое вами не соответвует необходимому. Повторите ввод!")
            }
            tmp = prompt("Введите имя файла (допустимые символы : a-z, 0-9, -, _ ;расширение файла .json): ")
            first_interaction = false
        } while (!(/[0-9a-z\-_]{1,}.json/gm.test(tmp))) // валидация имени файла регуляркой
        return tmp
    }
    /**
     * @param {string} filename
     * @return {boolean}
     */
    #is_possibly_to_write(filename) { // проверка на возможность записи в файл
        try {
            fs.statSync(filename);
            return false
        }
        catch (err) {
            if (err.code === 'ENOENT') {
                return true
            }
        }
    }
    /**
     * @param {string} filename
     * @return {boolean}
     */
    #is_necesary_to_rewrite(filename) { // запрос на перезапись файла
        switch (prompt(`Хотите перезаписать файл '${filename}'? (y/n): `)) {
            case 'y':
            case 'Y':
                return true
                break
            case 'n':
            case 'N':
            default:
                return false
                break
        }
    }
    /**
     * @param {string} filename
     * @param {object} content
     */
    write(content) { // запись файла
        switch (prompt(`Хотите сохранить файл? (y/n): `)) {
            case 'n':
            case 'N':
                console.log(`Сохранение пропущено!`)
                return
        }
        var filename = this.#enter_filename()
		// два условия объеденины в одно. если не сработает первое, то запуститься проверка второго
		// если первое сработало, то второе не сработет, ибо условия связаны через или
        if (this.#is_possibly_to_write(filename) || this.#is_necesary_to_rewrite(filename)) {
            fs.writeFileSync(filename, JSON.stringify(content), (err) => {
                console.log("Ошибка! Не удалось записать файл: ", err)
            })
        }
    }
}

module.exports.file_writer = file_writer