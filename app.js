const sort_wrap = require("./sort.js").sort_wrap
const get_number_wrap = require("./input.js").get_number_wrap
const file_writer = require("./export.js").file_writer
const run_tests = require("./test.js").run_tests

console.log("Громов Никита, 433, 10 вариант, сортировка слиянием")

var sorter = new sort_wrap()
var getter = new get_number_wrap()
var writer = new file_writer()

run_tests(sorter)

/**
* @return {number[]}
*/
function fill_array() {
    /**
    * @type {number}
    */
    var len
    var first_interaction = true
    do {
        if (!first_interaction) {
            console.log("Введённое вами не соответвует необходимому. Повторите ввод!")
        }
        len = getter.get("Введите длину сортируемого массива (длина должна быть больше 0): ")
        first_interaction = false
    } while ( !(len > 0) )
    /**
     * @type {number[]}
     */
    var tmp = []
    for (var i = 0; i < len; i++) {
        tmp.push(getter.get(`Введите элемент [${i+1}]: `))
    }
    return tmp
}

sorter.insert_data_and_run = fill_array()
console.table(sorter.get_result)
writer.write(sorter.get_result)