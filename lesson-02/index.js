//  in this lesson:
// -------------------
/*

    Lesson 2 :  Numbers & Math

    1.  Numbers & Math.
    2.  Order of Operations & Brackets.
    3.  Calculations using Floats can be inaccurate.
    4.  Math.round()

*/

//  🟨Console :-

10 + 2;

10 - 2;

10 * 2;

10 / 2;

2 + 2 + 3;

2.5 + 2.5;

10.9 * 2 + 20.95;

42.75 + 4.99;

10.9 * 2 + 20.95 + 4.99;

//  🟨Order of Operations (+ - / *  are Operators) :-
/*
    1.  (...)
    2.  * /
    3.  + -
*/

1 + 1 * 3; // Multiplication (*) & Division (/)  --Done 1st--.   1 + 3 = 4 :-

//  🟨We can use (...)
//  🟨to control which part gets --Done 1st--

(1 + 1) * 3; // =>  (2) * 3 = 6

//  🟨Syntax Rules of Brackets  !! SYNTAX ERROR :-
//  ( 1 + 1 * ( 3       // This will not work

20.98 + 7.99 * 2;

//  36.93 * 10%  ❗❌
//  1% = 1 / 100    per / cent
//  10% = 10 / 100 = 0.1

36.93 * 0.1; // = 3.693

20.95 + 7.99 * 2 * 0.1; //    = 22.548
(20.95 + 7.99 * 2) * 0.1; //    = 3.693

//                                      🟨  Calculations with Floats are sometimes inaccurate When working with money
20.95 + 7.99; //   28.939999999998      ⛔  INSTEAD OF DOING THIS FOR '$' DOLLARS
2095 + 799; //  2894                    ✅  1st DO THE CALCULATIONS IN CENTS
(2095 + 799) / 100; //  28.94           ✅  CONVERT BACK TO DOLLARS

//  🟨How to Round a number :-

Math.round(2.2); //  2
Math.round(2.6); //  3

((2095 + 799) * 0.1) / 100; // 2.894    //  inner (Calculate 1st)

Math.round((2095 + 799) * 0.1) / 100; //  2.89  //  $DOLLARS


var number = 3.7;
var roundedNumber = Math.round(number);
console.log("Rounded Number: " + roundedNumber);

// 🟨2 * 2 * 2
var base = 2;
var exponent = 3
var result = Math.pow(base,exponent)
console.log(base + " raised to the power of " + exponent + " is " + result)

//🟨Square Root
var number = 16
var squareRoot = Math.sqrt(number)
console.log("The Square root of " + number + " is " + squareRoot)

//🟨Random Number Generation
var randomNum = Math.random()
console.log("Random number between 0 and 1 is : " + randomNum)

var randomInRange = Math.floor(Math.random() * 10) + 1
console.log("Random Number between 1 and 10 : " + randomInRange)

//🟨Absolute Value
var num = -5
var absoluteValue = Math.abs(num)
console.log("Absolute value of " + num + " is " + absoluteValue)


// 🟨 MATH 🟨

var randomNum = Math.random()
console.log("Random Number : " + randomNum)

var num = 5.7;
var roundedDown = Math.floor(num);
console.log("Rounded Down: " + roundedDown);

var num = 5.1;
var roundedUp = Math.ceil(num);
console.log("Rounded Up: " + roundedUp);

var num = 5.3;
var rounded = Math.round(num);
console.log("Rounded: " + rounded);

var maxNum = Math.max(10,20,30,40)
console.log("Maximum Number : " + maxNum)

var minNum = Math.min(10,20,30,40)
console.log("Minimum Number : " + minNum)

var base = 2
var exponent = 3
var result = Math.pow(base,exponent)
console.log(base + " raised to the power of " + exponent + " is = " + result)

var number = 16
var squareRoot = Math.sqrt(number)
console.log("Square root of " + number + " is = " + squareRoot)

console.log("The value of PI is : " + Math.PI)