/**
 * Напишите функцию memoize(fn), которая кэширует результаты вызова fn по аргументам.
 * Если функция уже вызывалась с такими же аргументами — результат берётся из кэша,
 * без повторного вычисления.
 * Input: повторные вызовы slowSquare(4)
 * Output: второй вызов возвращает результат из кэша
 */

function memoize(fn) {
    // your code
}

const slowSquare = memoize((n) => {
    console.log('computing', n)
    return n * n
})

console.log(slowSquare(4))  // 'computing 4', затем 16
console.log(slowSquare(4))  // 16 (без 'computing 4')
console.log(slowSquare(5))  // 'computing 5', затем 25
