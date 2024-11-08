const sort_wrap = require("./sort.js").sort_wrap // модуль с сортировкой
const prompt = require('prompt-sync')() // функция для получения ввода с клавиатуры

/**
* @param {sort_wrap} sort
*/
function run_tests(sort) {
    switch (prompt(`Хотите запустить тесты? (y/n): `)) {
        case 'n':
        case 'N':
            console.log(`Тесты пропущены!`)
             return
    }
    /**
    * @type {{ input_array: number[], output_array: number[] }[]}
    */
    var test_data = [{ "input_array": [6], "output_array": [6] }, { "input_array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "output_array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }, { "input_array": [-3, 98, 0, 17, 56, -234, 5, 8, 709, 11, 10004, 67], "output_array": [-234, -3, 0, 5, 8, 11, 17, 56, 67, 98, 709, 10004] }, { "input_array": [9, 5, 0, 1, 10], "output_array": [0, 1, 5, 9, 10] }, { "input_array": [-4, -2, -5, -1, -9, -4], "output_array": [-9, -5, -4, -4, -2, -1] }, { "input_array": [5, 5, 5, 5], "output_array": [5, 5, 5, 5] }] // считывание файла и его преобразование в объект js
    var sussesful_tests = 0
    test_data.forEach((elem) => { // метод для поэлементного обхода массива
        sort.insert_data_and_run = elem.input_array
        // проверка результатов теста посредством сравнения строк
        if (JSON.stringify(sort.get_result) == JSON.stringify(elem)) sussesful_tests++ 
    })
    console.log(`Тестов пройдено ${sussesful_tests}/${test_data.length}`)
}

module.exports.run_tests = run_tests