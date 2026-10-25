/**
 * Реализуйте метод myBind, работающий аналогично Function.prototype.bind.
 * Возвращает новую функцию с привязанным контекстом this и, возможно,
 * заранее переданными аргументами. Остальные аргументы добавляются при вызове.
 * Стандартный bind использовать нельзя.
 * Input: greet.myBind(user, 'Hello')('!')
 * Output: 'Hello, Ivan!'
 */

Function.prototype.myBind = function (context, ...boundArgs) {
    // your code
}

function greet(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`
}

const user = {name: 'Ivan'}
const boundGreet = greet.myBind(user, 'Hello')

console.log(boundGreet('!'))  // 'Hello, Ivan!'
