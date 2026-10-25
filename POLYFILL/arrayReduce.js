/**
 * Реализуйте метод myReduce, работающий аналогично Array.prototype.reduce.
 * Сворачивает массив в одно значение через callback(acc, item, index, array).
 * - Если initialValue передан — он начальный аккумулятор.
 * - Если нет — начальным становится первый элемент массива.
 * Стандартный reduce использовать нельзя.
 * Input: [1, 2, 3, 4].myReduce((acc, x) => acc + x, 0)
 * Output: 10
 */

Array.prototype.myReduce = function (callback, initialValue) {
    // your code
}

console.log([1, 2, 3, 4].myReduce((acc, item) => acc + item, 0))  // 10
console.log([1, 2, 3, 4].myReduce((acc, item) => acc + item))     // 10
