/**
 * Напишите функцию compose(...fns), которая объединяет функции в одну.
 * Результат применяет функции справа налево: compose(f, g)(x) === f(g(x)).
 * Input: compose(x => x + 1, x => x * 2)(5)
 * Output: 11  (сначала 5 * 2 = 10, затем 10 + 1 = 11)
 */

function compose(...fns) {
    // your code
}

const addThenDouble = compose(x => x * 2, x => x + 1)

console.log(compose(x => x + 1, x => x * 2)(5))  // 11
console.log(addThenDouble(3))                     // 8  ((3 + 1) * 2)
