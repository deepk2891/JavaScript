// Higher order function : A function which takes another function as a input to itself or returns a function from itself is called...
// Callback function : A function which is passed in a higher order fucntion is called...

function x () {
  console.log("Namaste");
}
function y (x) {
  x()
}
y(x)  // Hi
// y is higher orrder function
// x is callback function


// 🟨🚨 DRY Principle  =  Don't Repeat Yourself 🚨
/*  

const radius = [ 3,1,2,4 ]


const calculateArea = (radius) => {
  const output = []
  for (let i = 0; i < radius.length; i++)
  {
    output.push(Math.PI * radius[ i ] * radius[ i ])
  }
  return output
}
console.log(calculateArea(radius));


const calculateCircumference = function (radius) {
  const output = []
  for (let i = 0; i < radius.length; i++)
  {
    output.push(2 * Math.PI * radius[ i ])
  }
  return output
}
console.log(calculateCircumference(radius));


const calculateDiameter = function (radius) {
  const output = []
  for (let i = 0; i < radius.length; i++)
  {
    output.push(2 * radius[ i ])
  }
  return output
}
console.log(calculateDiameter(radius));

*/


// 🟨Functional Programming

const radius = [ 3,1,2,4 ]

const area = function (radius) { return Math.PI * radius * radius }
const circumference = function (radius) { return 2 * Math.PI * radius }
const diameter = function (radius) { return 2 * radius }

const calculate = (arr,logic) => {
  const output = []
  for (let i = 0; i < arr.length; i++)
  {
    output.push(logic(arr[ i ]))
  }
  return output
}

// console.log(radius.map(area));

console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));

