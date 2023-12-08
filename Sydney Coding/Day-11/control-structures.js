// Control Structures -- controls the flow of execution based on certain conditions

// CONDITIONAL STATEMENTS
//-- allows you to execute different blocks of code based on a condition

// if .. else statement
//-- allows you to create a program that runs only if a specific condition is met.

let age = 18;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// if - else is - else 
let temp = 25;

if (temp < 0) {
    console.log("It's freezing.");
} else if (temp >= 0 && temp < 20) {
    console.log("It's a cool day.");
} else {
    console.log("It's a warm day.");
}

// SWITCH STATEMENT
// switch .. case statement
//-- allows you to execute a block of code among many alternatives
//-- allows you to control the execution flow of your code. --from the instructor's notes

/*
switch statement body is composed of 3 keywords:
​
    case = keyword for starting a case block
    break = for stopping the switch statement from running the next case
    default = for running a code when no matching case is found
*/

let day = 'Monday';
switch (day) {
    case 'Monday':
        console.log("It's the start of the week.");
        break;
    case 'Friday':
        console.log("It's the end of the week.");
        break;
    default:
        console.log("It's a regular day.");
        break;
}

let number = 5;
switch(number) {
    case 1:
        console.log("The number is one");
        break;
    case 2: 
        console.log("The number is two");
        break;
    case 3:
        console.log("The number is three");
        break;
    case 4:
        console.log("The number is four");
        break;
    case 5:
        console.log("The number is five");
        break;
    default:
        console.log("The number is not 1-5");
}

console.log("=== SHORT ACTIVITY #1 ===");

let is_num = 15;

switch(true) {
    case(is_num >= 1 && is_num <= 10):
        console.log("The number is between 1 and 10");
        break;
    case(is_num >= 11 && is_num <= 20): //THIS IS THE CORRECT ANSWER
        console.log("The number is between 11 and 20");
        break;
    case(is_num >= 21 && is_num <= 30):
        console.log("The number is between 21 and 30");
        break;
    default:
        console.log("The number is not 1-30");
        break;
}

console.log("=== SHORT ACTIVITY #2 ===");

/* Create a switch..case statement with the following conditions:
    Students that got an A will get a Pasta
    Students that got a B will get an Ice Cream
    Students that got a C will get a Candy
    For any other value, print "No reward to give."
*/

let grade = 'E'; //changing the letters will change the output
switch(grade) {
    case 'A':
        console.log("Students will get a Pasta!");
        break;
    case 'B':
        console.log("Students will get an Ice Cream!");
        break;
    case 'C':
        console.log("Students will get a Candy!");
        break;
    default:
        console.log("No reward to give.");
        break;
}