// Задание 1

let documentElement;

function documentClickHandler(event) {
    let screenWidth = window.innerHeight //832
    let screenHeight = window.innerHeight //832

    let clickX = event.clientX
    let clickY = event.clientY
    console.log(`Координаты клика: x - ${clickX}, y - ${clickY}`)

    let coords = []
    if (clickX > screenWidth / 2) {
        coords[0] = "Право"
    } else {
        coords[0] = "Лево"
    }

    if (clickY < screenHeight / 2) {
        coords[1] = "Верх"
    } else {
        coords[1] = "Низ"
    }

    console.log(`${coords[0]}-${coords[1]}`)


}

document.documentElement.addEventListener('click', documentClickHandler)



// Задание 2

let locationButton = document.querySelector('#navigator');
locationButton.addEventListener('click', getUserData);

let locationValue = document.querySelector('#navigator-value');

function getUserData() { 
    window.navigator.geolocation.getCurrentPosition(userDataHandlerSuccess, userDataHandlerFail)
}

function userDataHandlerSuccess(res) { 
    locationValue.innerHTML = `${res.coords.latitude} , ${res.coords.longitude} `
}

function userDataHandlerFail(erroe) { 
    locationValue.innerHTML = erroe.code
}
