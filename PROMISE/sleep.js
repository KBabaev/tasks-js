/**
 * Напишите функцию sleep(ms), которая возвращает промис,
 * выполняющийся (resolve) через ms миллисекунд.
 * Это базовый строительный блок для пауз в async-коде.
 * Input: await sleep(300)
 * Output: продолжение выполнения через 300 мс
 */

function sleep(ms) {
    // your code
}

async function demo() {
    console.log('start')
    await sleep(300)
    console.log('after 300ms')
}

demo()
