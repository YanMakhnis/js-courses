// const elements = document.querySelectorAll('[class^="box"]');

// elements.forEach((element) => {
//     element.addEventListener('click', handleClick)
// });

// function handleClick(event) {
//     const clickX = event.clientX;
//     const clickY = event.clientY;
//     const elementTitleData = event.currentTarget.getAttribute('data-title');
//     const elementDimension = elementTitleData.split(' ')[1]

//     console.log(`Координаты клика ${clickX},${clickY}`)
//     console.log(`Размер прямоугольника - ${elementDimension}`)
//     console.log('Заголовок прямоугольника:', elementTitleData);
// }

const element = document.querySelector('.wrapper');
element.addEventListener('click', handleClick)

function handleClick(event) {
    const clickX = event.clientX;
    const clickY = event.clientY;
    const clickedElement = document.elementFromPoint(clickX, clickY);
   
    if(clickedElement.className.includes('box')){
        const elementTitleData = clickedElement.getAttribute('data-title');
        const elementDimension = elementTitleData.split(' ')[1];
        console.log(`Координаты клика ${clickX},${clickY}`);
        console.log(`Размер прямоугольника - ${elementDimension}`);
        console.log('Заголовок прямоугольника:', elementTitleData);
    }  
}