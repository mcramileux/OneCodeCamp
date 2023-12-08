// VARIABLES

let my_name = "Princess";
const age = 18;

console.log(my_name);
console.log(age);

/* Multi-line comments */

//Basic Syntax
let x = 5;
let y = 10;
let sum = x + y;

console.log("Sum is:", sum);

// DATA TYPES

// PRIMITIVE TYPES = most basic data types in JS

//String
let first_name = "John";
console.log("This is a string:", first_name)
console.log(typeof first_name)

//Number
const myAge = 20;
const myDecimal = 90.98;

console.log("This is a number:", myAge);
console.log(typeof myDecimal);

//Boolean = True or False
let isStudent = true;
console.log("This is a Boolean:", isStudent);
console.log(typeof isStudent);

//NULL = Empty ; intentional absence
const myNull = null;
console.log(myNull);
console.log(typeof myNull);

//Undefined = uninitialized or missing value
myUndefinedConst = undefined;
console.log(myUndefinedConst);
console.log(typeof myUndefinedConst);


//OBJECT TYPE = more complex data types; holds key-value pairs and functions

//Object = represent a collection of key-value pairs enclosed in { }
let person = {
    fName: "Jane",
    lName: "Doe",
    age: 22
};

console.log(person);

//Array = represent an ordered list of values enclosed in [ ]
const students = ['Kavin', 'Lien', 'Tyler', 'Tanya', 'Lillian', 'Yang', 'Bojan', 'Kristine'];

console.log(students);

//Functions = reusable block of codes that can be invoked by name
function fullName() {
    const firstName = "Elaine";
    const lastName = "Lee";

    console.log("Full name is:", firstName, lastName);
}

// fullName();

function movieName(firstWord = 'The', secWord = 'Avengers') {
    return firstWord + secWord;
}