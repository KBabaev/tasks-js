/**
 * Напишите функцию getTreeSum(node), которая принимает объект-дерево и возвращает
 * сумму всех значений в поле value. Структура узла:
 * - value: число
 * - children: массив дочерних узлов такой же структуры (может отсутствовать)
 * Input: { value: 1, children: [ { value: 2 }, { value: 3, children: [ { value: 4 } ] } ] }
 * Output: 10
 */

function getTreeSum(node) {
    // your code
}

const tree = {
    value: 1,
    children: [
        {value: 2},
        {value: 3, children: [{value: 4}]}
    ]
}

console.log(getTreeSum(tree))  // 10
