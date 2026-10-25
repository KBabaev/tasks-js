/**
 * Напишите функцию debounce(func, delay), которая возвращает "обёртку" над func.
 * Функция func вызывается только после того, как с момента последнего вызова
 * обёртки прошло delay миллисекунд без новых вызовов.
 * Контекст (this) и аргументы должны прокидываться в func.
 * Input: быстрые подряд вызовы search('h'), search('he'), ..., search('hello')
 * Output: func вызовется один раз с 'hello'
 */

function debounce(func, delay) {
    // your code
}

const search = debounce((value) => {
    console.log(value)
}, 500)

search('h')
search('he')
search('hel')
search('hell')
search('hello')  // через 500 мс выведет только 'hello'
