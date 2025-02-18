// let styles = ["Джаз", "Блюз"];
// alert(styles);
// styles.push("Рок-н-ролл");
// alert(styles);

// for (let i = 0; i < styles.length; i++) {
//     let middle = getArrayMiddle(styles);
//     if (i === middle) {
//         styles[i] = "Классика";
//     }
// }
// alert(styles);
// styles.shift();
// alert(styles);

// styles.unshift("Рэп", "Рэгги");
// alert(styles);

// function getArrayMiddle(arr) {
//     let middle = Math.ceil((arr.length - 1) / 2);
//     return middle;
// }

// function getLastItem(arr) {
//     return arr.at(-1)
// }
// let myArray = [1, 2, 3, 4];
// let myArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// //console.log(getLastItem(myArray2)) // 4

// let arr = [];
// let totalAmount = 0;

// function sumInput() {
//     while (true) {
//         let input = prompt("Please insert the value");
//         if (isNaN(+input) || input == null) {
//             break;
//         } else {
//             arr.push(input)
//             totalAmount+=Number(input)
//         }
//     }
// }

// sumInput()
// console.log(arr)
// console.log(totalAmount)

function countElementsOfArray(arr, elem) {
    let arr2 = arr.filter(i => i==elem)
    return arr2.length
}

let array = [1, 2, 3, 4, 1, 2, 4, 1, 10];

console.log(countElementsOfArray(array, 10))