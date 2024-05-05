a()
// Function Statement OR Function Declarations
function a () {
  console.log("a called");
}


// Function Statement
function b () {
  console.log("b called");
}
b()


// Function Expression
const c = function (param1) {
  return function xyz () {

  }
}
console.log(c());


// Anonymous Function is a function without a name
// function () {

// }


// First Class Functions - Ability to used like values
// First Class CItizens

// Named Function Expression

// Difference between Parameters & Arguments ?

// First Class Functions - Ability to be used like values
// & First Class Citizens -Ability to be used like values makes this function first class citizens
// when they are treated as a value passesd into another function or returned from another function,
// so this is known as a first class function.

// Arrow Functions - ES6
const xyz = () => {
  console.log("hello arrow function");
}
xyz()
