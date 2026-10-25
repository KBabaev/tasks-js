/**
 * Напишите функцию throttle(func, delay), которая возвращает "обёртку" над func.
 * func вызывается не чаще одного раза в delay миллисекунд: первый вызов проходит
 * сразу, а последующие в течение delay игнорируются.
 * Контекст (this) и аргументы должны прокидываться в func.
 * Input: быстрые подряд вызовы onScroll()
 * Output: func вызывается максимум раз в delay мс
 */

function throttle(func, delay) {
    // your code
}

const onScroll = throttle((n) => {
    console.log('scroll', n)
}, 500)

onScroll(1)  // выполнится сразу
onScroll(2)  // проигнорируется
onScroll(3)  // проигнорируется
