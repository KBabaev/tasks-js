/**
 * Напишите функцию once(fn), которая возвращает обёртку, вызывающую fn только
 * один раз. При последующих вызовах fn не выполняется, а возвращается результат
 * первого вызова.
 * Input: const init = once(() => { ...; return 42 })
 * Output: init() === 42, повторные init() возвращают 42 без повторного выполнения
 */

function once(fn) {
    // your code
}

const init = once(() => {
    console.log('init called')
    return 42
})

console.log(init())  // 'init called', затем 42
console.log(init())  // 42 (без повторного 'init called')
console.log(init())  // 42
