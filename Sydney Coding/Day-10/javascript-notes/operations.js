// Type Coercion

// Numbers
let number = "123";
console.log(typeof number); // string

// --convert using Number()
convertedNumber = Number(number);
console.log(typeof convertedNumber); // number

// String 
let num = 123;
console.log(typeof num); // number

// --convert using String()
convertedString = String(num);
console.log(typeof (convertedString)); // string

// nu.toString();

// Boolean
// false = 0; null, undefined, NaN, ""
let boolValue = Boolean(0);
console.log(boolValue); // false

boolValue = Boolean("Hello");
console.log(boolValue); // true

// ====================
console.log(1 + "1"); // 11
console.log([3, 4] + "1"); // 3,41

// ====================
// Arithmetic Operators
// +, -, *, **, /, %, ++, --
// sum, difference, product, power, quotient, remainder/modulus, increment, decrement

let x = 5;
let y = 2;

let sum = x + y;
console.log("Sum is: " + sum); // Sum is 3
console.log("Sum is:", sum); // the instructor used this

let difference = x - y;
console.log("Difference is: " + difference); // Difference is 3
console.log("Difference is:", difference); // the instructor used this

let product = x * y;
console.log("Product is: " + product); // Product is 10
console.log("Product is:", product); // the instructor used this

let quotient = x / y;
console.log("Quotient is: " + quotient); // Quotient is 2.5
console.log("Quotient is:", quotient); // the instructor used this

let modulus = x % y;
console.log("Remainder is: " + modulus); // Remainder is 1
console.log("Remainder is:", modulus); // the instructor used this

sum++;
difference--;

console.log("Sum++ :", sum, "Difference-- :", difference);

let message = "Hello " + "World";
console.log(message); // Hello World

let samp = "Hi" + 10;
console.log(samp); // Hi10

// Assignment Operators [ = ]
// Assignment Expressions: [ =, +=, -=, *=, /=, %=, **= ]
// equal to [ == ] double equals
// addition assignment [ += ] -> x += y -> x = x + y
// subtraction assignment [ -= ] -> x -= y -> x = x - y
// multiplication assignment [ *= ] -> x *= y -> x = x * y
// division assignment [ /= ] -> x /= y -> x = x / y

let a = 10;
let b = 5;

a += b; // a = a + b
console.log("a: ", a); // 15

a -= b; // a = a - b
console.log("a: ", a); // 10

a *= b; // a = a * b
console.log("a: ", a); // 50

a /= b; // a = a / b
console.log("a: ", a); // 10
