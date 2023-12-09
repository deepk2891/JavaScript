let cars = [ "BMW","volvo","honda" ]
console.log(cars)


//Access an Array element
let bmw = cars[ 0 ]
console.log(bmw)


//Array length property
let len = cars.length
console.log(len)


//Access last array item
let last = cars[ cars.length - 1 ]
console.log(last)


//Loop over an array item
cars.forEach((item,index,array) => {
	console.log(item,index)
})


//toString() : convert an array to a string
console.log(`cars.toString() : ${ cars.toString() }`)


//pop() : remove last element from an array
let last1 = cars.pop()
console.log(last1)
let last2 = cars[ cars.length - 1 ]
console.log(last2)


//push() : add a new element to end of the array
cars.push("Audi")
console.log(`push("Audi") : ${ cars }`)


//shift() : remove first element from the array
cars.shift()
console.log(`shift() : ${ cars }`)


//unshift() : Add an element at the begining of an array
cars.unshift('Hyundai')
console.log(`unshift()  :${ cars }`)


//concat() : Create a new array by merging existing arrays
let bikes = [ 'yamaha','suzuki','RoyalEnfield' ]
console.log(`bikes : ${ bikes }`)
let vehicles = cars.concat(bikes)
console.log(`concat() of cars & bikes : ${ vehicles }`)


//sort() : sort an array in ascending method
vehicles.sort()
console.log(`sort() : ${ vehicles }`)


//reverse() : reverse all elements of an array
vehicles.reverse()
console.log(`reverse() : ${ vehicles }`)

let num1 = [ 2,3,4,5,6,7 ]

let num2 = num1.map(value => value * 2)
//  let num2 = num1.map(multiply)
//  function multiply (value) {
//      return value * 2
//  }s
console.log(num2)


let num3 = num1.filter(value => value > 4)
console.log(num3)

let num4 = num1.reduce((a,b) => {
	console.log(`${ a } ${ b }`)
	return a + b
})
console.log(num4)