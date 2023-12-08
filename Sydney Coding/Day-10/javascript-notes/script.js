// Variables

// let is to change the value of the variable
// const is to keep the value of the variable
let my_name = "Princess";
const age = 18;

// console.log is to print the value of the variable and debugging/testing the codes
console.log(my_name);
console.log(age);

/* This is what you called Multi-line comments */
// This is what you called Single-line comments

// Basic Syntax
let x = 5;
let y = 10;
let sum = x + y;

// this is how you print the value of the variable in three different ways in the console
console.log("Sum is: " + sum);
console.log("Sum is: " + (x + y));
console.log("Sum is: ", sum); // this is the best way to print the value of the variable and the instructor used it

// Data Types

// String
let first_name = "John";
console.log("This is a string:", first_name); // this is the best way to print the value of the variable and the instructor used it
console.log("This is a string:", "John");
console.log(typeof first_name) // first_name is a string and printed out in the console

// Number
const myAge = 20;
const myDecimal = 90.98;

console.log("This is a number:", myAge);
console.log("This is a number:", myDecimal);
console.log(myDecimal); // this is the instructor used to print the value of the variable
console.log(typeof myDecimal); // myDecimal is a number and printed out in the console

// Boolean = True or False
let isStudent = true;

console.log("This is a boolean:", isStudent); // this is the instructor used to print the value of the variable
console.log(typeof isStudent); // isStudent is a boolean and printed out in the console

// Null = Empty ; intentional absence of value
const myNull = null;

console.log(myNull);
console.log(typeof myNull); // myNull is an object and printed out in the console

// Undefined = Variable has been declared but not yet assigned a value; uninitialized or missing value
myUndefinedConst = undefined;
console.log(myUndefinedConst);
console.log(typeof myUndefinedConst); // myUndefinedConst is undefined and printed out in the console

// Object Type = more complex data types; holds key-value pairs and functions

// Object = represent of a collection of key-value pairs enclosed in curly braces {}
let person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 22
};

console.log(person); // this is the printed version in the console: {firstName: 'Jane', lastName: 'Doe', age: 22}

// Array = represent an ordered list of values enclosed in [ ]
const students = ["Kavin", "Lien", "Tyler", "Tanya", "Lillian", "Yang", "Bojan", "Kristine", "Art"];

console.log(students); 
// this is the printed version in the console: ['Kavin', 'Lien', 'Tyler', 'Tanya', 'Lillian', 'Yang', 'Bojan', 'Kristine', 'Art']

// Function = reusable block of code that can be invoked by name; can take in parameters and return data
function fullName() {
    const firstName = "Elaine";
    const lastName = "Lee";

    console.log("Full name is:", firstName, lastName);
}

fullName('Elaine', 'Lee'); // this is the printed version in the console: Full name is: Elaine Lee

function movieName(firstWord ='The', secondWord = 'Avengers') {
    return firstWord + secondWord;
}