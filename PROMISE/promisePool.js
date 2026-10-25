/**
 * Напишите функцию promisePool(tasks, limit), которая запускает массив задач
 * (функций, возвращающих промис) с ограничением на количество одновременно
 * выполняемых задач (limit).
 * - Возвращает промис с массивом результатов в исходном порядке.
 * - В каждый момент времени активно не больше limit задач.
 * Input: [task1, task2, task3, task4], 2
 * Output: [результаты задач по порядку]
 */

function promisePool(tasks, limit) {
    // your code
}

const makeTask = (ms, value) => () =>
    new Promise(resolve => setTimeout(() => resolve(value), ms))

promisePool([
    makeTask(300, 'a'),
    makeTask(100, 'b'),
    makeTask(200, 'c'),
    makeTask(50, 'd'),
], 2).then(console.log)  // ['a', 'b', 'c', 'd']
