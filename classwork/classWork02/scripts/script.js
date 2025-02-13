let start = 2;

// while(start
//<=12){
//     if(start
//%2==0){
//         console.log(start)
//     }
//     start
//++
// }

// do{
//     if(start
//%2==0){
//         console.log(start)
//     }
//     start
//++
// }
// while(start
//<=12)

// for(let i = start; i<=12; i=i+2)
// {
//     console.log(i)
// }


// function getX() {
//     x = Math.floor(Math.random() * 99 + 23)
//     x += 3
//     x *= 2
//     x -= 4
//     x /= 2
//     x **= 2
//     x -= 10
//     // Чему равен X сейчас?
//     x %= 5
//     x *= 3
//     x += 1
//     alert(x)
// }
// getX()


// for (let i = 1; i <= 10; i++) {
//     console.log(`7x${i}=${7 * i}`)
// }

function min(a, b) {
    if (typeof (a) === 'number' && typeof (b) === 'number') {
        return Math.min(a, b);
    } else {
        return "Извините, вы передали неверные значения";
    }

}


// let age = prompt("Сколько Вам лет?", 18);
// // в зависимости от условия объявляем функцию
// let welcome
// if (age < 18) {
//   welcome = function () {
//     alert("Привет!");
//   }
// } else {
//   welcome = function () {
//     alert("Здравствуйте!");

//   }
// }
// // ...не работает
// welcome();

function sumTo(n) {
    let total = 0;
    let expression = '';

    for (let i = n; i >= 1; i--) {
        total += i;
        expression += i;
        if (i > 1) {
            expression += ' + ';
        }
    }

    return `${expression} = ${total}`;
}

