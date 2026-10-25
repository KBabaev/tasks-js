/**
 * Напишите функцию promiseRace(promises), работающую аналогично Promise.race.
 * - Возвращает промис, который завершается так же, как первый завершившийся
 *   промис из массива (успешно или с ошибкой).
 * - Стандартный Promise.race использовать нельзя.
 * Input: [slow(100, 'a'), slow(50, 'b')]
 * Output: 'b'
 */

function promiseRace(promises) {
    // your code
}

const slow = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms))

promiseRace([
    slow(100, 'a'),
    slow(50, 'b'),
]).then(console.log)  // 'b'
