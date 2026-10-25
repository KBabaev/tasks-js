/**
 * Напишите функцию getNodes(tree, type), которая возвращает все ноды в порядке
 * следования, соответствующие переданному типу. Глубина вложенности любая.
 * Input: { type: "nested", children: [ { type: "nested", children: [ { type: "added", value: 50 } ] }, { type: "added", value: 51 } ] }, "added"
 * Output: [ { type: "added", value: 50 }, { type: "added", value: 51 } ]
 */

function getNodes(tree, type) {
    // your code
}

const tree = {
    type: "nested",
    children: [
        {
            type: "nested",
            children: [
                {type: "added", value: 50}
            ]
        },
        {type: "added", value: 51}
    ]
}

console.log(getNodes(tree, "added"))
// [ { type: "added", value: 50 }, { type: "added", value: 51 } ]
