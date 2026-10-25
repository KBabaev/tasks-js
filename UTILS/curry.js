/**
 * Напишите функцию curry(fn), которая превращает функцию от нескольких аргументов
 * в каррированную. Её можно вызывать по одному аргументу за раз или сразу группой,
 * пока не наберётся нужное количество (fn.length), после чего вызывается fn.
 * Input: const sum = curry((a, b, c) => a + b + c)
 * Output: sum(1)(2)(3) === sum(1, 2)(3) === sum(1, 2, 3) === 6
 */

function curry(fn) {
    // your code
}

const sum = curry((a, b, c) => a + b + c)

console.log(sum(1)(2)(3))  // 6
console.log(sum(1, 2)(3))  // 6
console.log(sum(1, 2, 3))  // 6
