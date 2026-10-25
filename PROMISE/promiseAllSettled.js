/**
 * Напишите функцию promiseAllSettled(promises), работающую аналогично
 * Promise.allSettled. Возвращает промис с массивом результатов, где каждый элемент:
 * - { status: 'fulfilled', value } — если промис выполнен,
 * - { status: 'rejected', reason } — если отклонён.
 * Порядок сохраняется. Стандартный Promise.allSettled использовать нельзя.
 * Input: [Promise.resolve(1), Promise.reject('err')]
 * Output: [{ status: 'fulfilled', value: 1 }, { status: 'rejected', reason: 'err' }]
 */

function promiseAllSettled(promises) {
    // your code
}

promiseAllSettled([
    Promise.resolve(1),
    Promise.reject('err'),
]).then(console.log)
// [{ status: 'fulfilled', value: 1 }, { status: 'rejected', reason: 'err' }]
