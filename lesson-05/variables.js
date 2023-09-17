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
