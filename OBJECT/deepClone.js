/**
 * Напишите функцию deepClone(value), которая создаёт глубокую копию значения.
 * Нужно поддержать вложенные объекты и массивы.
 * Изменение копии не должно затрагивать оригинал.
 * structuredClone и JSON использовать нельзя.
 * Input: { a: 1, b: { c: [1, 2, 3] } }
 * Output: независимая копия того же объекта
 */

function deepClone(value) {
    // your code
}

const original = {a: 1, b: {c: [1, 2, 3]}}
const copy = deepClone(original)
copy.b.c.push(4)

console.log(original)  // { a: 1, b: { c: [1, 2, 3] } }
console.log(copy)      // { a: 1, b: { c: [1, 2, 3, 4] } }
