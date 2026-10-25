/**
 * Напишите функцию groupBy(items, key), которая принимает массив объектов items
 * и строку key, и возвращает объект, где ключи — значения поля key,
 * а значения — массивы объектов с этим значением.
 * Input: [{name: 'Ivan', age: 20}, {name: 'Anna', age: 20}, {name: 'Petr', age: 30}], 'age'
 * Output: { 20: [{name: 'Ivan', age: 20}, {name: 'Anna', age: 20}], 30: [{name: 'Petr', age: 30}] }
 */

function groupBy(items, key) {
    // your code
}

const users = [
    {name: 'Ivan', age: 20},
    {name: 'Petr', age: 30},
    {name: 'Anna', age: 20},
    {name: 'Alex', age: 30},
    {name: 'Boris', age: 40},
]

console.log(groupBy(users, 'age'))
