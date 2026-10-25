/**
 * Напишите функцию promiseAny(promises), работающую аналогично Promise.any.
 * - Возвращает промис с результатом первого успешно выполненного промиса.
 * - Если все промисы отклонены — отклоняется с AggregateError.
 * - Стандартный Promise.any использовать нельзя.
 * Input: [Promise.reject('a'), Promise.resolve('b'), Promise.resolve('c')]
 * Output: 'b'
 */

function promiseAny(promises) {
    // your code
}

promiseAny([
    Promise.reject('a'),
    Promise.resolve('b'),
    Promise.resolve('c'),
]).then(console.log)  // 'b'
