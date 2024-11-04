const sort_wrap = require("./sort.js").sort_wrap // модуль с сортировкой
const get_number_wrap = require("./input.js").get_number_wrap //модуль для получение ввода с клавиатуры
const file_writer = require("./export.js").file_writer // модуль с сохранинием данных
const run_tests = require("./test.js").run_tests // модуль с тестами

console.log("Громов Никита, 433, 10 вариант, сортировка слиянием")

var sorter = new sort_wrap() // экземпляр сортировщика
var getter = new get_number_wrap() // экземпляр класса почечения ввода
var writer = new file_writer() // экземпляр класса для записи файла

run_tests(sorter) // запуск тестов с передачей внутрь сортировщика

/**
* @return {number[]}
*/
function fill_array() { // функция для заполнения исходного массива с клавиатуры
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
        tmp.push(getter.get(`Введите элемент [${i+1}]: `)) // добавление чисел в сортирумый массив
    }
    return tmp
}

sorter.insert_data_and_run = fill_array() // передача в сортировщик сортируемых данных и запуск сортировки
console.table(sorter.get_result) // вывод результатов сортировки в виде таблицы
writer.write(sorter.get_result) // сохранения результата сортировки в файл