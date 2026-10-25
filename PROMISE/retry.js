/**
 * Напишите функцию retry(fn, attempts), которая вызывает асинхронную функцию fn
 * и, если та отклоняется, повторяет попытку до attempts раз.
 * - Возвращает промис с результатом первой успешной попытки.
 * - Если все попытки исчерпаны — отклоняется последней ошибкой.
 * Input: retry(unstableFn, 3)
 * Output: результат fn либо ошибка после всех попыток
 */

function retry(fn, attempts) {
    // your code
}

let count = 0
const unstableFn = () => {
    count++
    return count < 3 ? Promise.reject('fail ' + count) : Promise.resolve('ok on ' + count)
}

retry(unstableFn, 5).then(console.log)  // 'ok on 3'
