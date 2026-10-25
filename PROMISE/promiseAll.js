/**
 * Напишите функцию promiseAll(promises), работающую аналогично Promise.all.
 * - Принимает массив промисов или обычных значений.
 * - Возвращает промис с массивом результатов в исходном порядке.
 * - Если любой промис отклонён — общий промис сразу отклоняется.
 * - Стандартный Promise.all использовать нельзя.
 * Input: [Promise.resolve(1), 2, Promise.resolve(3)]
 * Output: [1, 2, 3]
 */

function promiseAll(promises) {
    // your code
}

promiseAll([
    Promise.resolve(1),
    2,
    Promise.resolve(3),
]).then(console.log)  // [1, 2, 3]
