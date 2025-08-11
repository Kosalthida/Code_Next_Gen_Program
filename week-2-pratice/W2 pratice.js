//Week 2 pratice :
// Lab 1:No Return but Accepts Parameter

function greetUser(name) {
    console.log("Hello,", name);
}
greetUser("Thida");


// Lab 2:Return + Parameter

function sayHello() {
    return "Hello, World!";
}
let greeting = sayHello();
console.log(greeting);


//Lab 3:Return + Parameter

function addNum(num1, num2) {
    return num1 + num2;
}
var result = addNum(5, 10);
console.log(result); 


//Lab 4:Intro to ES6 - Why ES6?

let firstName = "Kosalthidathida";
let lastName = "Mony";
let es5FullName = firstName + " " + lastName;
let es6FullName = `${firstName} ${lastName}`;
console.log("ES5 Full Name:", es5FullName);
console.log("ES6 Full Name:", es6FullName);

//Lab 5: Arrow Function (Basic)

function multiply(a, b) {
    return a * b;
}
const multiplyArrow = (a, b) => a * b;
console.log(multiply(5, 10)); 
console.log(multiplyArrow(5, 10)); 

//Lab 6:Arrow Function - Default Parameter

const greet = (name = "Guest") => {
    console.log(`Hello, ${name}!`);
}
greet("Thida"); 
greet(); 
