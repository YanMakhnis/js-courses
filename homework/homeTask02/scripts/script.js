//Task 1

// let randomNumber = getRandomInt(1, 100);
// let numberFromUser

// while (true) {
//     numberFromUser = prompt("Пожалуйста, введите число:")

//     if (numberFromUser == null) {
//         alert("Ничего, получится в другой раз")
//         break;
//     }

//     numberFromUser = Number(numberFromUser);

//     if (isNaN(numberFromUser)) {
//         alert("Пожалуйста, введите число!");
//         continue;
//     }

//     if (numberFromUser > randomNumber) {
//         alert("Многовато, нужно меньше")
//     } else if (numberFromUser < randomNumber) {
//         alert("Маловато, нужно больше")
//     } else {
//         alert("Верно! Ура, победа!")
//         break;
//     }
// }

// while(true){
//     numberFromUser = prompt("Пожалуйста, введите число:");
//     if (numberFromUser === null) {
//         alert("Ничего, получится в другой раз");
//         break;
//     }
//     numberFromUser = Number(numberFromUser);
//     switch (true) {
//         case (isNaN(numberFromUser)): 
//             alert("Пожалуйста, введите число!");
//             break; 
//         case (numberFromUser > randomNumber):
//             alert("Многовато, нужно меньше");
//             break;
//         case (numberFromUser < randomNumber):
//             alert("Маловато, нужно больше");
//             break;
//         default: 
//             alert("Верно! Ура, победа!");
//             break; 
//     }
//     if (numberFromUser === randomNumber) {
//         break;
//     }   
// }

// function getRandomInt(min, max) {
//     if (min % 1 == 0 && max % 1 == 0) {
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     } else {
//         return "Input error. Please insert the integral number"
//     }
// }

//Task 2

function calculateElementArea(sideA, sideB) {
    if (sideB === undefined) {
        sideB = sideA;
    }
    return sideA * sideB;
}

function calculateElementAreaWithDefaultValue(sideA, sideB = sideA) {
    return sideA * sideB;
}


//Task 3

function createCounter() {

    let value = 0;

    function showValue() {
        console.log(value);
    }

    function increaseValue() {
        value ++;
        showValue();
    }

    function decreaseValue() {
        value --;
        showValue();
    }

    function addValue(num) {
        value += num;
        showValue();
    }

    function restart() {
        value = 0;
        showValue();
    }

    return {
        increaseValue: increaseValue,
        decreaseValue: decreaseValue,
        addValue: addValue,
        restart: restart
    }
}

console.log("=========== Result for myCounter ==========")

let myCounter = createCounter();
myCounter.addValue(5)
myCounter.increaseValue()
myCounter.decreaseValue()
myCounter.decreaseValue()
myCounter.addValue(12)
myCounter.restart()
myCounter.addValue(2)

console.log("=========== Result for myCounter2 ==========")

let myCounter2 = createCounter();
myCounter2.addValue(4)
myCounter2.increaseValue()
myCounter2.restart()
myCounter2.decreaseValue()
myCounter2.addValue(8)
myCounter2.addValue(2)
