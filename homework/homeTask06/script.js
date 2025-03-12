const elements = document.querySelectorAll('[class^="box"]');

elements.forEach((element) => {
    element.addEventListener('click', handleClick)
});

function handleClick(event) {
    const clickX = event.clientX;
    const clickY = event.clientY;
    const elementTitleData = event.currentTarget.getAttribute('data-title');
    const elementDimension = elementTitleData.split(' ')[1]
    
    console.log(`Координаты клика ${clickX},${clickY}`)
    console.log(`Размер прямоугольника - ${elementDimension}`)
    console.log('Заголовок прямоугольника:', elementTitleData);
}
