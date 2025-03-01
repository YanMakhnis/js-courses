const task1= Array.from(document.querySelectorAll('p'))
console.log(task1.find(p => p.textContent==6))

const task2 = document.querySelectorAll('[important]')[0]
console.log(task2)

const task3 = document.querySelectorAll('#bold-text')[0]
console.log(task3)

const task4 = document.querySelectorAll('.image-four')[0]
console.log(task4)

console.log(task2.previousElementSibling)
console.log(task2.nextElementSibling)

const task6Element = document.querySelectorAll('[alt^="Воз"]')
const task7Element = document.querySelectorAll('[alt$="и Да"]')
task6Element.forEach(i => console.log(i))
task7Element.forEach(i => console.log(i))
// console.log(task6Element.firstElementChild.nextElementSibling.firstElementChild)
// console.log(task6Element.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild)
// console.log(task6Element.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild)

const task8 = document.querySelectorAll('.sector-three p') //search among children
console.log(task8)



document.querySelectorAll('[id]').forEach(i => console.log(i))

function countChildren(elem){
    console.log(elem.children.length)
}

countChildren(document.body)