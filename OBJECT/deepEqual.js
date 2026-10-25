/**
 * Напишите функцию deepEqual(a, b), которая проверяет глубокое равенство
 * двух значений (примитивы, вложенные объекты и массивы).
 * Input: { a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }
 * Output: true
 */

function deepEqual(a, b) {
    // your code
}

console.log(deepEqual({a: 1, b: {c: 2}}, {a: 1, b: {c: 2}}))  // true
console.log(deepEqual({a: 1}, {a: 1, b: 2}))                   // false
console.log(deepEqual([1, [2, 3]], [1, [2, 3]]))              // true
