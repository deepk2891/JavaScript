
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

const person2 = {
	name: 'deep',
	shirt: 'blue'
}
console.log(person2)
console.log(person2.name)
console.log(person2.shirt)

const introducer = (name,shirt) => {
	const person = {
		name: name,
		shirt: shirt,
		assets: 100000,
		liabilities: 50000,
		networth: function () {
			return this.assets - this.liabilities
		}
	}
	const intro = `Hi, my name is ${ person.name } and the color of my shirt is ${ person.shirt } and my networth is ${ person.networth() }`
	return intro
}
console.log(introducer('deep','blue'))
console.log(introducer('peep','white'))


let groceries = [ '🍌','🍎','🍊','🍐','🍉','🥑','🍇' ]
console.log(groceries[ 0 ])
console.log(groceries[ 1 ])
console.log(groceries[ 2 ])
console.log(groceries[ 3 ])

for (let i = 0; i < groceries.length; i++)
{
	console.log(groceries[ i ])
}

for (const grocery of groceries)
{
	console.log(grocery)
}

const numbers = [ 1,2,3,4,5,6 ]
// for (let i = 0; i < numbers.length; i++)
// {
// 	console.log(numbers[ i ])
// }

const double = (numbers) => {
	let result = []
	for (const number of numbers)
	{
		result.push(number * 2)
		// result.push(number ** 2)  // Square
	}
	return result
}
console.log(double([ 1,2,3,4,5,6 ]))

// [ 2,4,6,8,10,12 ]
// for (const number of numbers)
// {
// 	result.push(number * 2)
// }
// console.log(result)


// 	const howManyLetters = () => {
// 		const phrase = 'hey, can you go to grocery store with me?'
// 		let result = 0
// 		for (const index in phrase)
// 		{
// 			console.log(Number(index) + 1)
// 			result = Number(index) + 1
// 		}
// 		return result
// 	}
// 	howManyLetters()


// 	const howManyLetters = (phrase) => {
// 		let result = 0;
// 		for (const char of phrase)
// 		{
// 			// character is a letter or ! Not
// 			if (/[a-zA-Z]/.test(char))
// 			{
// 				result += 1;
// 			}
// 		}
// 		return result;
// 	};
// 	const phrase = 'This is called '
// 	console.log(howManyLetters(phrase));


const howManyLetters = (phrase) => {
	let result = 0

	// for (const index of phrase)
	// {
	// 	console.log(Number(index) + 1)
	// 	result = Number(index) + 1
	// }

	// return { result: phrase.length }
	return phrase.length
}
// const phrase = prompt("Enter phrase : ")
const phrase = 'hello this is a sentence'
console.log(`Phrase length : ${ howManyLetters(phrase) }`)


const sumArray = (numbers) => {
	let result = 0
	for (const number of numbers)
	{
		console.log(number)
		result += number
	}
	return { result }
}
const nums = [ 1,2,3,4 ]
console.log(sumArray(nums))


const max = (numbers) => {
	let result = numbers[ 0 ]

	for (const number of numbers)
	{
		if (number > result)
		{
			result = number
		}
	}
	return { result }
}
console.log(max([ 1,3,5,74,3 ]))


const letterFrequancy = (phrase) => {
	// letterFrequancy('haha')👉{'h':2,'a':2}
	console.log(phrase)
	const frequancy = {}
	for (const letter of phrase)
	{
		console.log(letter)
		if (letter in frequancy)
		{
			frequancy[ letter ] += 1
		} else
		{
			frequancy[ letter ] = 1
		}
	}
	return frequancy
}
console.log(letterFrequancy('deep !'))


const wordFrequancy = (phrase) => {
	const frequancy = {}

	words = phrase.split(' ')
	for (const word of words)
	{
		if (word in frequancy)
		{
			frequancy[ word ]++
		}
		else
		{
			frequancy[ word ] = 1
		}
	}
	return frequancy
}
console.log(wordFrequancy('lol what lol hello'))


const wordFrequancy2 = (phrase) => {
	const words = phrase.split(' ')
	return letterFrequancy(words)
}
const userInput = 'hello lol hello'
console.log(wordFrequancy2(userInput))


// Higher order functions
// Map : loops and returns an array
// Filter : loops and returns an array with matching conditions
// Reduce 


//👉MAP

const doubleMap = (number) => { return number.map(number => number * 2) }
console.log(doubleMap([ 1,2,3,4 ]))

let result = [ 1,2,3,4 ].map(num => num * 2)
console.log(result)


//👉FILTER 

const filter = (numbers,greaterThan) => {
	let result = []

	for (const number of numbers)
	{
		if (number > greaterThan)
		{
			result.push(number)
		}
	}
	return result
}
// console.log(numb.filter([ 1,2,3,4,5,6 ],2))
const numb = [ 1,2,3,4,5,6 ]
console.log(numb.filter(num => num > 4 || num < 2))


// 	if ( userIsAuthenticated || userIsPayingMember ) {
//  	show youtube videoes
// 	} else {
// 		ads
// 	}


const actors = [
	{ name: 'jonny depp',netWorth: 20000 },
	{ name: 'amber herd',netWorth: 10 },
	{ name: 'mat demon',netWorth: 17000 },
	{ name: 'brad pit',netWorth: 300000 },
	{ name: 'leonardo wincy',netWorth: 1000 }
]
let actorHighNetWorth = actors.filter(actor => actor.netWorth > 10)
console.log(actorHighNetWorth)

let actorNames = actorHighNetWorth.map(actor => actor.name).join(', ')
console.log(actorNames)

// playground.innerHTML = `<h1>${ actorNames }</h1>`


//👉REDUCE

// sum of all  the net worths
// SUM: Think reduce
// REDUCE takes in a function as a argument

digits = [ 1,2,3 ]
const digitsResult = digits.reduce(function (a,b) {
	return a + b
})

console.log(digitsResult)

let netWorthCalculator = actors.reduce(function (accumulator,actor) {
	return accumulator + actor.netWorth
},0)
console.log(netWorthCalculator)

console.log(actors.reduce((a,b) => a + b.netWorth,0))


//randomFruit
const randomFruit = (fruits) => {
	const randomNumber = Math.floor(Math.random() * fruits.length)

	return fruits[ randomNumber ]
}
// const fruits = [ '🍌','🍎','🍊','🍐' ]
console.log(randomFruit(fruits))


// if else if else
// rainy (1), sunny (-1), overcast (0)
const weatherScore = (weather,weather2) => {
	let score

	if (weather == 'rainy' && weather2 == 'overcast')
	{
		score = 2
	}
	else if (weather == 'rainy')
	{
		score = 1
	}
	else if (weather == 'sunny')
	{
		score = -1
	}
	else if (weather == 'overcast')
	{
		score = 0
	}
	return score
}
console.log(weatherScore('rainy','overcast'))

