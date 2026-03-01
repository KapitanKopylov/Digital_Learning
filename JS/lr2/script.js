// 1
function mult(a, b, c) {
    if (a > b) {
        if (b > c) {
            return a*b;
        } else {
            return a*c;
        }
    } else {
        if (a > c){
            return a*b;
        } else {
            return b*c;
        }
    }
}

let a = Number(prompt("Enter a number"));
let b = Number(prompt("Enter a number"));
let c = Number(prompt("Enter a number"));

console.log(mult(a,b,c));

// // 2
// function data(name, title = 'Private') {
//     console.log(`Name: ${name}, Title: ${title}`);
// }
//
// data('Rick', 'Sergeant');
// data('John');

// 3


// // 5
// function factorial(number) {
//     if (number === 1) {
//         return 1;
//     } else {
//         return number*factorial(number-1);
//     }
// }
//
// console.log(factorial(10));
