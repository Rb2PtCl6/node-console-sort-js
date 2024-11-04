class sort_wrap {
    /**
     * @type {number[]}
     */
    #input_array
    /**
     * @type {number[]}
     */
    #output_array
    /**
     * @type {number}
     */
    static classes_amount = 0;
    constructor() {
        if (sort_wrap.classes_amount === 0) {
            sort_wrap.classes_amount++;
        } else {
            throw new Error("Ошибка! Один экземпляр уже существует и его достаточно!");
        }
    }
    /**
     * @param {number[]} array
     * @return {number[]}
     */
    set insert_data_and_run(array) {
        this.#clear_data();
        this.#input_array = array;
        this.#run_sorting()
    }
    #clear_data() { // очищает внутрение массивы
        this.#input_array = [];
        this.#output_array = [];
    }
    #run_sorting() { // запускает сортировку
        this.#output_array = this.#mergeSort(this.#input_array)
    }
    /**
    * @return {{ input_array: number[], output_array: number[] } }
    */
    get get_result() { // возвращает результат
        return { input_array: this.#input_array, output_array: this.#output_array };
    }
    /**
     * @param {number[]} array
     * @return {number[]}
     */
    #mergeSort(array) { // основная функция для сортировки слиянием
        // Base case
        if (array.length <= 1) return array;
        var mid = Math.floor(array.length / 2);
        // Recursive calls
        var left = this.#mergeSort(array.slice(0, mid));
        var right = this.#mergeSort(array.slice(mid));
        return this.#merge(left, right);
    }
    /**
     * @param {number[]} left
     * @param {number[]} right
     * @return {number[]}
     */
    #merge(left, right) { // вспомогательная функция для сортировки слиянием
        /**
        * @type {number[]}
        */
        var sortedArr = []; // место хранения отсортированного массива
        /**
        * @type {number}
        */
        var tmp
        while (left.length && right.length) {
            // вставка элементов в отсортированный массив
            // array.shift() - удаляет из массива первый элемент и возвращает его
            if (left[0] < right[0]) {
                tmp = left.shift();
                if (tmp !== undefined) { // проверка для исключения добавления в отсортированный массив пустого значения
                    sortedArr.push(tmp);
                }
            } else {
                tmp = right.shift();
                if (tmp !== undefined) { // проверка для исключения добавления в отсортированный массив пустого значения
                    sortedArr.push(tmp);
                }
            }
        }
        // ...Arr - позволяет передавать итерируемые коллекции (например, массивы или строки) 
        // как список аргументов функции или добавлять содержащиеся в них элементы в новый массив
        return [...sortedArr, ...left, ...right]; // последовательно соедяняет массивы для получения одного
    }
}

module.exports.sort_wrap = sort_wrap