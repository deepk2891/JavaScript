/* 
TODO: Write a function that sums two numbers
TODO: Write a function that subtracts two numbers
TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

console.log('hello from the Arithmetic exercise')

const add = (a,b) => {
  return a + b
}
console.log(`10 + 50 = ${ add(10,50) }`)

const sub = (a,b) => {
  return a - b
}
console.log(`10 - 50 = ${ sub(10,50) }`)

const div = (a,b) => {
  if (b == 0 || b < 0)
  {
    console.log("You can't divide by 0 or a negative number");
    return undefined;
  }
  else
  {
    return a / b;
  }
};
console.log(`10 / 50 = ${ div(10,50) }`)

const mul = (a,b) => {
  return a * b
}
console.log(`10 * 50 = ${ mul(10,50) }`)


/* 
  TODO: create a function that console logs the result of any of the above operations.
*/