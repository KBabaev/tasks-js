/**
 * Напишите функцию debounceAsync(fn, delay), где fn — асинхронная функция.
 * Обёртка откладывает вызов fn на delay мс (как обычный debounce), но при этом
 * возвращает промис. Серия быстрых вызовов должна разрешиться результатом
 * единственного реального вызова fn.
 * Input: быстрые подряд вызовы search('a'), search('ab'), search('abc')
 * Output: все три промиса разрешатся результатом fn('abc')
 */

function debounceAsync(fn, delay) {
    // your code
}

const search = debounceAsync(async (value) => {
    return 'result: ' + value
}, 300)

search('a').then(console.log)    // 'result: abc'
search('ab').then(console.log)   // 'result: abc'
search('abc').then(console.log)  // 'result: abc'
