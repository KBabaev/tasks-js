/**
 * Напишите функцию flattenTree(tree), которая превращает дерево в плоский массив
 * узлов (без поля children). Порядок — узел, затем его потомки (pre-order).
 * Узел имеет поле id и необязательный массив children.
 * Input: { id: 1, children: [ { id: 2 }, { id: 3, children: [ { id: 4 } ] } ] }
 * Output: [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 } ]
 */

function flattenTree(tree) {
    // your code
}

const tree = {
    id: 1,
    children: [
        {id: 2},
        {id: 3, children: [{id: 4}]}
    ]
}

console.log(flattenTree(tree))
// [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 } ]
