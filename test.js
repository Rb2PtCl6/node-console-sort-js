const fs = require("fs")
const sort_wrap = require("./sort.js").sort_wrap

/**
* @param {sort_wrap} sort
*/
function run_tests(sort) {
    var test_file = "test_array.json"
    /**
    * @type {{ input_array: number[], output_array: number[] }[]}
    */
    var test_data = JSON.parse(fs.readFileSync(test_file))
    var sussesful_tests = 0
    test_data.forEach((elem) => {
        sort.insert_data_and_run = elem.input_array
        if (JSON.stringify(sort.get_result) == JSON.stringify(elem)) sussesful_tests++
    })
    console.log(`Тестов пройдено ${sussesful_tests}/${test_data.length}`)
}

module.exports.run_tests = run_tests