
console.log("hello 1")
console.log("deep")


//Variables
const name = "deep"
console.log(name)
sentence = "how are you doing today"
console.log(sentence)


//Operators

// food = Number(prompt("how much was the food?"))
// tipPercentage = Number(prompt("tip percentage")) / 100
// tipAmount = food * tipPercentage
// total = food + tipAmount

// console.log("tip amount",tipAmount)
// console.log("total",total)
// alert(tipAmount)

// user input

// Data Types (strings , numbers )
// numbers 👉 1, 5, 6
// strings 👉 'hello' "what is up"
// arrays  👉 []
// objects 👉 {}
// boolean 👉 true / false


// Math operations
// 👉 Multiply *
// 👉 Devide /
// 👉 Exponents **
// 👉 Modulo / Remainder % 5 % 2 = 1
// 👉 Add +
// 👉 Substract -

// Math Methods
// 👉 Floor = Rounds down
// 👉 Ceil - Rounds up
// 👉 Random - gives you number between 0 and 1


// Baby weather app (conditionals)
// if rain 👉 'Grab your umbrella ☔'
// else 👉 'Wear your sunglasses 😎'
// let weather = prompt('How is tthe wether?')
let weather = 'rain'

if (weather == 'rain')
{
	console.log('Grab your umbrella ☔')

} else
{
	console.log('Wear your sunglasses 😎')
}


// Functions
// this is a function called 'sayMyName' and it has 0 arguments
// its prints out your name to the console.
function sayMyName () {
	console.log(name)
}
sayMyName()

// sayMyName2()
// this is a function called 'sayMyName2' and ihas 1 argument called name
// it logs out your name
function sayMyName2 (name) {
	console.log(name)
}
sayMyName2('coder')

//
function greeting (name) {
	greet = `hi ${ name }, Nice to meet you!`
	console.log(greet)
}
greeting('deep')


function sum (a,b) {
	return a + b
}
sum(1,2)

function calculateFoodTotal (food,tip) {
	const tipPercentage = tip / 100
	const tipAmount = food * tipPercentage
	const total = sum(food,tipAmount)

	console.log("food amount",food)
	console.log(`tip amount ${ tip }%`)
	console.log("total",total)

	return total
}
console.log(calculateFoodTotal(100,20))

console.log('--------------ES6--------------')
// ES6
// Arrow Functions =>
// Arrow function with explicit return 
const sumArrow = (a,b) => {
	return a + b
}

// Arrow function with implicit return 
// IMPORTANT : For implicit return, remove curly braces
const sumArrow2 = (a,b) => a + b

console.log(sumArrow2(10,50))


console.log('--------------Arrays--------------')
// Arrays
const fruits = [ '🍌','🍎','🍊','🍐' ]

console.log(fruits)
console.log(fruits[ 0 ])
console.log(fruits[ 1 ])
console.log(fruits[ 2 ])
console.log(fruits[ 3 ])

fruits.push('🍪')
console.log(fruits)

fruits.push('🍇')
console.log(fruits)


// Array slice
// start from 0 and upto 2 but not including 2 [0 , 1]
console.log(fruits.slice(0,2))

console.log(fruits.slice(3,6))

console.log(fruits.slice(1,4))

console.log(fruits.indexOf('🍐'))

console.log(fruits.length)


console.log('--------------Objects--------------')
//Objects

const person = {
	name: 'deep',
	shirt: 'white',
}
console.log(person)

// access object: dot notation vs bracket notation
console.log(person.name)

// bracket notation
console.log(person[ 'name' ])

// asign object
person.phone = '9874563215'
console.log(person[ 'phone' ])

console.log(person)
