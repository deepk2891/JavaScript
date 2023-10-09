//  in this lesson:
//  -------------------
/*

     Lesson 5 : Variables

     1. What is variable ?
     2. Variable name restriction
     3. Create a new variable using let
     4. Re-assigning a value to a variable
     5. 3 ways to create variable (let, const, var)
     6. typeof + variable

*/

//   🟨What is variable ?   --camelCase--

//   Variable🟨 = 🟩Container
//   🟩 <- we can save a value

//   🟨Variable Name 🟥Restriction :-
//   🟦1. Cant use special words. Example: let❌
//        ❌ let let = 5;
//        🟩 let let1 = 5;
//   🟦2. Cant start a variable name with number
//        ❌ let 1name = 3;
//        🟩 let name1 = 5;  
//   🟦3. Cant use special characters except: $_
//        🟩 let $name = 5;  
//        🟩 let _name = 5;  


//   🟨Create a new Variable using let
let variable1 = 3;
console.log(variable1);


const calculation = 2 + 2;
console.log(calculation);
console.log(calculation + 2);

const result = calculation + 2;
console.log(result);

const message = 'hello';
console.log(message); console.log(';');


//   🟨Re-assigning a value to a variable
variable1 = 5;
console.log(variable1);


//   🟨Syntax Rules for Re-assigning a value to a variable
variable1 = 5;
console.log(variable1);


//   🟨increase a value of a variable by a certain number
variable1 = variable1 + 1;
console.log(variable1);


//   🟨Naming Conventions
//   🟦1. camelCase  : cartQuantity
//   🟦2. PascalCase : CartQuantity
//   🟦3. kebab-case : cart-quantity ❗(will not work in JavaScript)

//   🟨3 ways to create variable
//   🟦1. const variable2 = 3; (will not change in future)(Default)
const variable2 = 20;
//   🟦2. var variable3 = 4; (has some issues)
var variable3 = 30;
//   🟦3. let variable3 = 4; (will change in future)
let variable4 = 40;


//   🟨typeof + variables
console.log(typeof message);
console.log(typeof variable2);


//🟨Variable Swapping:

let a = 5;
let b = 10;

// swap the values
[ a,b ] = [ b,a ]
console.log("a : ",a)
console.log("b : ",b)

//🟨Increment and Decrement:

let count = 5

count++
console.log("Incremented count : " + count)
count--
console.log("Incremented count : " + count)

//🟨Calculate Area:

const length = 10
const width = 5
const area = length * width
console.log("Area of the rectangle : " + area)

//🟨Concatenating Strings:

var firstName = "Deep"
var lastName = "Kothari"
var fullName = firstName + lastName
console.log("Full Name : ",fullName)

//🟨Using Template Literals:

var firstName = "Deep"
var lastName = "Kothari"
var fullName = `${ firstName } ${ lastName }`
console.log(fullName)

//🟨Convert String to Number:

const numString = '42'
const num = Number(numString)

console.log("Original String : " + numString)
console.log("As a number : " + num)
console.log("Add 10 : " + (num + 10))

//🟨Variable Scope:

let globalVar = "I'am global"
function localVarScope () {
     let localVar = "I'm local to the function"
     console.log(localVar)
}

localVarScope()
console.log(globalVar)

//🟨Check Variable Type:

const value = true
if (typeof value === "string")
{
     console.log("It's a string")
}
else if (typeof value === "number")
{
     console.log("It's a number")
}
else if (typeof value === "boolean")
{
     console.log("It's a boolean")
}
else
{
     console.log("It's something else")
}

//🟨Temperature Converter:

var fahrenheit = 68
var celsius = ((fahrenheit - 32) * 5) / 9
console.log(`${ fahrenheit }°F is ${ celsius }°C`)

//🟨Random Number Generator:

var randomNumber = Math.floor(Math.random() * 10) + 1
console.log("Random number : " + randomNumber)

//🟨Age Calculator:

const birthYear = 2003
const currentYear = new Date().getFullYear()
const age = currentYear - birthYear
console.log(age)

//🟨Variable Scope (Function vs. Block):

if (true)
{
     var varVariable = "I'm function-scoped"
     let letVariable = "I'm block-scoped"
     const constVariable = "I'm also block-scoped"
}
console.log(varVariable)
console.log(letVariable)
console.log(constVariable)

//🟨Simple Calculator:

const num1 = 10;
const num2 = 5;
const operator = "+";
let result1;
switch (operator)
{
     case "+":
          result1 = num1 + num2;
          break;
     case "-":
          result1 = num1 - num2;
          break;
     case "*":
          result1 = num1 * num2;
          break;
     case "/":
          result1 = num1 / num2;
          break;
     default:
          result1 = "Invalid operator";
}
console.log(`Result of ${ num1 } ${ operator } ${ num2 } is ${ result1 }`);
