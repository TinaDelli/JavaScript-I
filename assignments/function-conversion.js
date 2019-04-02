// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

 let myFunction = () => {
console.log("Function was invoked!");
 };
 myFunction();

// let myFunction = () => console.log("Funtion was invoked!");

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

let anotherFunction = (param) => console.log("example");
// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

let add = (num1, num2) => console.log(num1 + num2);

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

let subtract = (num1, num2) => console.log(num1 -num2);
// Stretch

// exampleArray => [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

let exampleArray = [1,2,3,4]; 
const triple = exampleArray.map(num => num *3)
console.log(triple); 