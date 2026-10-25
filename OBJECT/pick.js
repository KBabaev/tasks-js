/**
 * Напишите функцию pick(obj, keys), которая возвращает новый объект,
 * содержащий только те ключи из keys, которые есть в obj.
 * Input: { a: 1, b: 2, c: 3 }, ['a', 'c', 'x']
 * Output: { a: 1, c: 3 }
 */

function pick(obj, keys) {
    // your code
}

console.log(pick({a: 1, b: 2, c: 3}, ['a', 'c', 'x']))  // { a: 1, c: 3 }
console.log(pick({a: 1, b: 2}, []))                      // {}
