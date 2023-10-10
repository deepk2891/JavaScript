//🟨1. Creating Boolean Variables:

let isTrue = true
let isFalse = false
console.log(isTrue)
console.log(isFalse)

//🟨2. Boolean Expressions:

let age = 18
let isAdult = age >= 18
console.log(isAdult)

//🟨3. Comparison Operators:

let x = 5
let y = 10

let isEqual = x === y
let isNotEqual = x !== y
let isGreater = x > y
let isLess = x < y

console.log(isEqual)
console.log(isNotEqual)
console.log(isGreater)
console.log(isLess)

//🟨4. Logical Operators (AND, OR):

var hasPermission = true
var isLoggedIn = false

letAccessResource = hasPermission && isLoggedIn
letSeeContent = hasPermission || isLoggedIn

console.log(letAccessResource)
console.log(letSeeContent)

//🟨5. Negation Operator (NOT):

var isLoggedOut = !isLoggedIn
console.log(isLoggedOut)

//🟨6. Using Boolean Values in Conditional Statements:

var isRaining = false
if (isRaining)
{
    console.log("Take an umbrella")
}
else
{
    console.log("No need for an umbrella")
}

//🟨7. Converting Values to Booleans:~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var value1 = Boolean(0)
var value2 = Boolean("")
var value3 = Boolean(null)
var value4 = Boolean("Hello")

console.log(value1)
console.log(value2)
console.log(value3)
console.log(value4)

//🟨8. Using Booleans with If-Else Statements:

var isSunny = true

if (isSunny)
{
    console.log(isSunny + " It's a sunny day!")
}
else
{
    console.log(isSunny + " It's not a sunny day! ")
}

//🟨9. Checking for Empty Strings:

let username = ""
if (username)
{
    console.log(`Hello ${ username }`)
}
else
{
    console.log("Please enter your username !")
}

//🟨10. Checking if a Number is Even:

let number = 9
let isEven = number % 2 === 0

if (isEven)
{
    console.log(`${ number } is Even`)
}
else
{
    console.log(`${ number } is Odd`)
}

//🟨11. Using Ternary Operator:

let userName = "deep"
let isAuthenticated = true

var message = isAuthenticated ? `Welcome ${ userName }` : "Acess Denied!"

console.log(message)

//🟨12. Checking for Multiple Conditions:

let isMorning = true
let isWeekend = false

if (isMorning && !isWeekend)
{
    console.log("It's a weekend morning")
}
else
{
    console.log("It's either not mornign or it's the weekend.")
}

//🟨13. Using Boolean Functions:

function isLeapYear (year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

var year = 2025
let leapYear = isLeapYear(year)

if (leapYear)
{
    console.log(`${ year } is leap year`)
}
else
{
    console.log(`${ year } is not a leap year`)
}

//🟨14. Comparing Strings:

let color1 = "blue"
let color2 = "red"
let areColorSame = color1 === color2
if (areColorSame)
{
    console.log(`${ color1 } and ${ color2 } is Same`)
}
else
{
    console.log(`${ color1 } and ${ color2 } are not Same`)
}

//🟨15. Checking if a Year is a Century Year:

function isCentureYear (year) {
    return year % 100 === 0
}

var year = 2110
var isCentury = isCentureYear(year)

if (isCentury)
{
    console.log(`${ year } is a century year`)
}
else
{
    console.log(`${ year } is not a century year`)
}

//🟨16. Using Logical OR to Provide Default Values:

function greetUser (username) {
    username = username || "Guest"
    console.log(`Hello, ${ username }`)
}

greetUser("deep")
greetUser()

//🟨17. Checking if an Array is Empty:

let fruits = []

if (fruits.length === 0)
{
    console.log("The array is empty")
}
else
{
    console.log("The array is not empty")
}

//🟨18. Checking if a Password Meets Criteria: >=8 char, >=1 Uppercase, >=1 digit

let password = "abc123"
let isStrongPassword = password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password);

if (isStrongPassword)
{
    console.log(`${ password } is Srtong`)
}
else
{
    console.log(`Password : "${ password }" is Weak`)
}

//🟨19. Using Logical NOT for Validation:

function isValidInput (input) {
    return !!input  // 🟩Double negation converts the input to a Boolean
}

let userInput = "Hello"
if (isValidInput(userInput))
{
    console.log(`User Input : "${ userInput }" is Valid`)
}
else
{
    console.log(`User Input : "${ useInput }" is not valid`)
}

//🟨20. Checking if a Character is a Vowel:

function isVowel (char) {
    char = char.toLowerCase()
    return "aeiou".includes(char)
}

let letter = "a"
if (isVowel(letter))
{
    console.log(`Letter : "${ letter }" is Vovel`)
}
else
{
    console.log(`Letter : "${ letter }" is not a Vovel`)
}

//🟨21. Checking if a Number is Positive or Negative:

function isPositive (num) {
    return num >= 0
}

var num = -5
if (isPositive(num))
{
    console.log(`Number : '${ num }' is Positive`)
}
else
{
    console.log(`Number : '${ num }' is Negative`)
}

//🟨22. Checking if a String Contains a Substring:

let sentence = "Deep Kothari"
let subString = "Deep"
if (sentence.includes(subString))
{
    console.log(`subString : '${ subString }' is present in sentence '${ sentence }'`)
}
else
{
    console.log(`subString : '${ subString }' is not present in sentence '${ sentence }'`)
}

//🟨23. Using the && Operator with Multiple Conditions:

var isSunny = true
var isWarm = true
if (isSunny && isWarm)
{
    console.log("It's sunny and warm outside!")
}
else
{
    console.log("It's not sunny and warm outside")
}

//🟨24. Checking if a User Has Admin Rights:

let isAdmin = true
let canEdit = false
if (isAdmin || canEdit)
{
    console.log("The user can edit content")
}
else
{
    console.log("The user can not edit content")
}

//🟨25. Using the ! Operator to Toggle a Boolean:

let isActive = false
// isActive = !isActive
// console.log("Active status : ",isActive)
// OR
if (isActive)
{
    console.log("User is active")
}
else
{
    console.log("User is not active")
}

//🟨26. Using Conditional (Ternary) Operator for Simplified Code:

let isLogged = true
var message = isLogged ? "Welcome!" : "Please log in."
console.log(message)