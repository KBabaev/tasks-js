/**
 * Реализуйте метод myMap, работающий аналогично Array.prototype.map.
 * Возвращает новый массив с результатами вызова callback(item, index, array)
 * для каждого элемента. Стандартный map использовать нельзя.
 * Input: [1, 2, 3].myMap(x => x * 2)
 * Output: [2, 4, 6]
 */

Array.prototype.myMap = function (callback) {
    // your code
}

console.log([1, 2, 3].myMap(item => item * 2))             // [2, 4, 6]
console.log(['a', 'b'].myMap((item, index) => item + index))  // ['a0', 'b1']
