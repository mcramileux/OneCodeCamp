//Type Coercion

//Numbers
let number = "123";
console.log(typeof number)
//--convert using Number()
convertedNumber = Number(number);
console.log(typeof convertedNumber);

//String
let num = 123;
console.log(typeof num);
//--convert using String()
convertedString = String(num);
console.log(typeof (convertedString));

// num.toString();

//Boolean
// false  = 0, null, undefined, NaN, ""
let boolValue = Boolean(0);
console.log(boolValue);
boolValue = Boolean("Hello");
console.log(boolValue);

// ==========================
console.log(1 + "1");
console.log([3, 4] + "1");


// ==========================
// ARITHMETIC OPERATORS
/* 
     + , - , * , ** , / , % , ++ , -- 
*/

let x = 5;
let y = 2;

console.log("=== ARITHMETIC OPERATORS ===");

let sum = x + y;
console.log("Sum is:", sum);

let difference = x - y;
console.log("Difference is:", difference);

let product = x * y;
console.log("Product is:", product);

let quotient = x / y;
console.log("Quotient is:", quotient);
​
let modulus = x % y;
console.log("Remainder is:", modulus);

sum++;
difference--;

console.log("Sum++ :", sum, "Diff-- :", difference);

let message = "Hello " + "world!";
console.log(message);

let samp = "Hi" + 10;
console.log(samp);


// ASSIGNMENT OPERATORS [ = ]
/*  
    equal to [ == ]
    Addition Assignment [ += ] ---> x +=y ---> x = x + y
    Subtraction Assignment [ -= ] ---> x = x - y
    Multiplication Assignment [ *= ] ---> x = x*y
    Division Assignment [ /= ] ---> x = x / y
*/
let a = 10;
let b = 5;

console.log("=== ASSIGNMENT OPERATORS ===");

a += b; // a = a + b --> a = 10 + 5
console.log("a: ", a);

a -= b; // a = a - b -->  a = 15 - 5
console.log("a: ", a);

a *= b; // a = a * b
console.log("a: ", a);
a /= b; // a = a / b
console.log("a: ", a);

//COMPARISON OPERATORS
// --- compares two values; returns Boolean values [ true or false ]

/*
    Equal [ == ] ---> true if the operands are equal
    Not Equal [ != ] ---> true if the operands are not equal
    Strict Equal [ === ] ---> true if the operands are equal and have the same type
    Strict Not Equal [ !== ] ---> true if the operands are not equal, or have different types
    Greater than [ x > y ] ---> true if the left operand is greater than the right operand
    Greater than or equal [ x >= y ] ---> true if the left operand is greater than or equal to the right operand
    Less than [ x < y ] ---> true if the left operand is less than the right operand
    Less than or equal	[ x <= y ] ---> true if the left operand is less than or equal to the right operand
*/

console.log("=== COMPARISON OPERATORS ===");

console.log(9 == 9); //true
console.log(9 != 20); //true
console.log(2 > 10); //false
console.log(2 < 10); //true
console.log(5 >= 10); //false
console.log(10 >= 10); //true

//LOGICAL OPERATORS
// --- combine boolean values and logical operators to evaluate conditions

/*
Logical AND [ x && y ] --> returns true if all operands are true, else returns false
Logical OR	[ x || y ] --> returns true if one of the operands is true, else returns false
Logical NOT	[ !x ] --> Reverse the result: returns true if false and vice versa
*/

let sunny = true;
let warm = false;

console.log("=== LOGICAL OPERATORS ===");

console.log("sunny && warm:", sunny && warm); //false
console.log("sunny || warm:", sunny || warm); //true
console.log("!sunny:", !sunny); //false

console.log(true && false); //false
console.log(false || false); //false
console.log(!true); //false

console.log("=== Short activity ===");
console.log(19 % 3); // 1
console.log(10 == 3); // false
console.log(10 !== 10); //false
console.log(2 !== "10"); //true 
console.log((false && true) || false); //false