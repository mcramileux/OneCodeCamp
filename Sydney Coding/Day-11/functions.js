//FUNCTIONS == written to perform a specific task.

// functions function_name () {
// }

function greet() {
    console.log("Hello!")
}

greet();

//parameters and arguments
//parameters = variables used to accept inputs given when the function is called.
//argument = input you need to pass to fill the parameter

function greet(name) {
    console.log('Hello ', name);
}

greet('Jane');

function greet(name, age) {
    console.log('Hello', name);
    console.log('You are', age);
}

greet('Nate', 25);

//default parameters
function weather(status = "Rainy") {
    console.log(`It's ${status} today.`);
}

weather();
weather('Sunny');
weather(null);

//return statement
//used to return a value back to the caller

function sum(a, b) {
    return a + b;
}

let result = sum(3, 2);
console.log(result);


function checkAge(my_age) {
    if (my_age > 18) {
        return "You are now of legal age."
    }
    return "You are still a minor."
}

console.log(checkAge(20));
console.log(checkAge(12));

//Variable Scope
let myGreetings = 'Hello World!'

function greetings() {
    let myGreetings = 'Good morning!'
    console.log(myGreetings);
}

greetings();
console.log(myGreetings);

//Arrow Function
//-- allows you to write JS Functions w/ a shorter, more concise syntax


function greetings(name) {
    console.log('Hello ', name);
}
greetings('John');


const greetings = (name) => {
    console.log('Hello', name);
}

greetings('John');

//greetings = variable that holds the function
//(name) = parameters
// => indicate the beginning of the function

function sumTwo(num) {
    return num + 2;
}

const sumTwo = (num) => num + 2;

const greetings = () => {
    console.log('Hello World');
    console.log('Good morning');
}

const sumThree = num => num + 3;

//=== PRACTICE ACTIVITY =====
/* 
1.] Create a function counter that returns a function. 
The returned function should increment a counter variable every time it's called. 
Use this to create two counters and observe if they share the same state.
​
2.] Write a JavaScript function to calculate the result of raising a given base to a specified exponent.
    For multiples of 3, print "Fizz" instead of the number.
    For multiples of 5, print "Buzz" instead of the number.
    For numbers that are multiples of both 3 and 5, print "FizzBuzz.”
​
3.] Write a function called isEven that takes a number as a parameter and returns true if it's even and false if it's odd. Test the function with various numbers.
​
4.] Declare a global variable globalVar with a value. Then, create a function that declares a local variable with the same name globalVar. Log the values of both variables inside and outside the function. What do you observe?
​
 5.] Write a function called applyFunction that takes a function and an array as parameters. It should apply the given function to each element of the array and return a new array with the results.
​
*/