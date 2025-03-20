let bodyElem = document.querySelector('body')
let firstElem = document.createElement('div')
firstElem.classList.add('main')
const ul = document.createElement('ul')
firstElem.prepend(ul)
for (let i = 1; i <= 10; i++) {
    let elem = document.createElement('li');
    let span = document.createElement('span');
    span.innerText = `Пункт №${i}`;
    elem.append(span);
    elem.setAttribute('order', i)
    if (i % 2 == 0){
        elem.classList.add('bold')
    }
    ul.append(elem);
}
if (ul.lastElementChild){
    ul.removeChild(ul.lastElementChild)
}
firstElem.insertAdjacentHTML('afterbegin', '<h3>Перечень работ</h3>')
bodyElem.prepend(firstElem)
