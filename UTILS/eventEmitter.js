/**
 * Реализуйте класс EventEmitter с методами:
 * - on(event, handler) — подписка на событие.
 * - off(event, handler) — отписка конкретного обработчика.
 * - emit(event, ...args) — вызов всех обработчиков события с переданными аргументами.
 * Input: emitter.on('msg', fn); emitter.emit('msg', 'hi')
 * Output: fn вызывается с аргументом 'hi'
 */

class EventEmitter {
    // your code
}

const emitter = new EventEmitter()

const handler = (text) => console.log('got:', text)
emitter.on('msg', handler)

emitter.emit('msg', 'hello')  // 'got: hello'
emitter.off('msg', handler)
emitter.emit('msg', 'bye')    // ничего не выводит
