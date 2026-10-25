/**
 * Напишите функцию getByPath(obj, path), которая возвращает значение по пути path
 * внутри вложенного объекта. Путь — строка с ключами через точку.
 * Если по пути ничего нет — вернуть undefined.
 * Input: { profile: { address: { city: 'Amsterdam' } } }, 'profile.address.city'
 * Output: 'Amsterdam'
 */

function getByPath(obj, path) {
    // your code
}

const user = {
    profile: {
        address: {
            city: 'Amsterdam'
        }
    }
}

console.log(getByPath(user, 'profile.address.city'))  // 'Amsterdam'
console.log(getByPath(user, 'profile.name'))          // undefined
console.log(getByPath(user, 'profile.address'))       // { city: 'Amsterdam' }
