/**
 * Реализуйте метод myEvery, работающий аналогично Array.prototype.every.
 * Возвращает true, если callback(item, index, array) вернул истинное значение
 * для всех элементов, иначе false. Стандартный every использовать нельзя.
 * Input: [2, 4, 6].myEvery(x => x % 2 === 0)
 * Output: true
 */

Array.prototype.myEvery = function (callback) {
    // your code
}

console.log([2, 4, 6].myEvery(item => item % 2 === 0))  // true
console.log([2, 4, 5].myEvery(item => item % 2 === 0))  // false
