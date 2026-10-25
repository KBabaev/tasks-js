/**
 * Реализуйте метод myFilter, работающий аналогично Array.prototype.filter.
 * Возвращает новый массив из элементов, для которых callback(item, index, array)
 * вернул истинное значение. Стандартный filter использовать нельзя.
 * Input: [1, 2, 3, 4, 5].myFilter(x => x > 2)
 * Output: [3, 4, 5]
 */

Array.prototype.myFilter = function (callback) {
    // your code
}

console.log([1, 2, 3, 4, 5].myFilter(item => item > 2))        // [3, 4, 5]
console.log(['apple', 'cat', 'banana'].myFilter(item => item.length > 3))  // ['apple', 'banana']
