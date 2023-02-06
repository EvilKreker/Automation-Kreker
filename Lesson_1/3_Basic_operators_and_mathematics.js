// // Постфіксна та префіксна форми
// let a = 1;
// let b = 1;

// let c = ++a; // 2
// let d = b++; // 1
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// // Результат присвоєння
// let a = 2;
// let x = 1 + (a *= 2);
// console.log(a); // 4
// console.log(x); // 5

// Перетворення типу 1
// console.log("" + 1 + 0); // 10
// console.log("" - 1 + 0); // -1
// console.log(true + false); // 1
// console.log(6 / "3"); // 2
// console.log("2" * "3"); // 6
// console.log(4 + 5 + "px"); // "9px"
// console.log("$" + 4 + 5); // "$45"
// console.log("4" - 2); // 2
// console.log("4px" - 2); // NaN
// console.log("  -9  " + 5); // "  -9  5"
// console.log("  -9  " - 5); // -14
// console.log(null + 1); // 1
// console.log(undefined + 1); // NaN
// console.log(" \t \n" - 2); // -2

// Виправте додавання
const prompt = require("prompt-sync")({ sigint: true });
var a = parseInt(prompt("Перше число?: "));
var b = parseInt(prompt("Друге число?: "));
var sum = a + b;
console.log("The sum of " + a + " and " + b + " is : " + sum);

// let a = +prompt("Перше число?", 1);
// let b = +prompt("Друге число?", 2);

// alert(a + b); // 3

// let a = prompt("Перше число?", 1);
// let b = prompt("Друге число?", 2);
// a = Number(a);
// b = Number(b);
// console.log(a + b); // 12