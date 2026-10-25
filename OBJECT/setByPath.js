/**
 * Напишите функцию setByPath(obj, path, value), которая устанавливает значение value
 * по пути path внутри объекта. Путь — строка с ключами через точку.
 * Если промежуточных объектов нет — их нужно создать.
 * Input: {}, 'profile.address.city', 'Amsterdam'
 * Output: { profile: { address: { city: 'Amsterdam' } } }
 */

function setByPath(obj, path, value) {
    // your code
}

console.log(setByPath({}, 'profile.address.city', 'Amsterdam'))
// { profile: { address: { city: 'Amsterdam' } } }

console.log(setByPath({a: {b: 1}}, 'a.c', 2))
// { a: { b: 1, c: 2 } }
