const fs = require("fs") // модуль для работы с файловой системой
const sort_wrap = require("./sort.js").sort_wrap // модуль с сортировкой

/**
* @param {sort_wrap} sort
*/
function run_tests(sort) {
    var test_file = "test_array.json" // файл с тестовыми данными
    /**
    * @type {{ input_array: number[], output_array: number[] }[]}
    */
    var test_data = JSON.parse(fs.readFileSync(test_file)) // считывание файла и его преобразование в объект js
    var sussesful_tests = 0
    test_data.forEach((elem) => { // метод ля поэлементного обхода массива
        sort.insert_data_and_run = elem.input_array
        // проверка результатов теста посредством сравнения строк
        if (JSON.stringify(sort.get_result) == JSON.stringify(elem)) sussesful_tests++ 
    })
    console.log(`Тестов пройдено ${sussesful_tests}/${test_data.length}`)
}

module.exports.run_tests = run_tests