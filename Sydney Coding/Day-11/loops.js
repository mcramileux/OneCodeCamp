/*
LOOPS - use to repeatedly execute a block of code until a specific condition is met */

// FOR statement
/* for ([initialization] ; [condition] ; [arithmetic expression]) {
    // code that will be executed as long as the condition returns true
} */

for (let x = 0; x < 10; x++) {
    console.log(x);
}

// x = 0  > true > display 0 > 0 + 1 = 1
// x = 1  > true > display 1 >  1 + 1 = 2
// x = 2 > true > display 2 > 2 + 1 = 3
//...
// x = 9 > true > display 9 > 9 + 1 = 10
// x = 10 > false 

for (let i = 1; i <= 5; i++) {
    console.log('Count: ', i);
}

// WHILE Statement

/* while (condition) {
    statement;
 } */

let a = 0;

while (a < 6) {
    console.log(`The value of i = ${a}`);
    a++;
}

let count = 1;
while (count <= 5) {
    console.log('Count: ', count);
    count++;
}

//Do-while Loop

let j = 1;

do {
    console.log('Do-while Count: ', j);
    j++;
} while (j <= 5)

// ==== SHORT ACTIVITY =====

/*
    1.] In this activity, the user is prompted to enter a score. Based on the score entered, the code uses conditional statements (if, else if, and else) to determine the corresponding grade. 

    If the score is 90 or above, it assigns the grade 'A'. 
    If the score is between 80 and 89, it assigns the grade 'B'. 
    If the score is between 70 and 79, it assigns the grade 'C'. 
    If the score is between 60 and 69, it assigns the grade 'D'. 

    Otherwise, if the score is below 60, it assigns the grade 'F'. The grade is then printed to the console.

    2.] Create a JavaScript program that prints all the numbers between a given range. 
    Prompt the user to enter the starting and ending numbers for the range. 
    Use a loop to iterate through the numbers in the range. Print each number in the console.
*/

//1.] 
let score = parseInt(prompt('Enter the score: '));
let grade;

//continue code here
// if (score >= 80) {
//     grade = 'B';
// } else if (score >= 70) {
//     grade = 'C';
// } else if (score >= 60) {
//     grade = 'D';
// } else if (score >= 90) {
//     grade = 'A';
// } else {
//     grade = 'F';
// }

// console.log('The grade for the score ' + score + ' is: ' + grade);

//2.] 
let start = parseInt(prompt('Enter the starting number: '));
let end = parseInt(prompt('Enter the ending number: '));

//continue code here
// for (let i = start; i <= end; i++) {
//     console.log(i);
//   }