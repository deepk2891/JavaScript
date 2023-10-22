//🟨1. Creating Objects using Object Literal Notation:

var person = {
    firstName: "Deep",
    lastName: "Kothari",
    age: 30,
    address: {
        street: "123 xyz",
        city: "Surat",
        State: "Gujarat"
    }
}
console.log(person.firstName)
console.log(person.address.city)


//🟨2. Adding and Modifying Object Properties:

person.email = "deep@gmail.com"
person.age = 31

delete person.address

console.log(person)


//🟨3. Creating Object Methods:

var car = {
    brand: "volvo",
    model: "xc60",
    year: 2023,
    start: function () {
        console.log(`Starting the ${ this.brand } ${ this.model }`)
    }
}
car.start()


//🟨4. Object Constructors:

function Book (title,author,year) {
    this.title = title;
    this.author = author
    this.year = year
}

var book1 = new Book("Science book","Einsteine",1998)
var book2 = new Book("Maths book","Newton",1998)

console.log(book1.title)


//🟨5. Object Prototypes:

Book.prototype.getInfo = function () {
    return `${ this.title } by ${ this.author } in year ${ this.year }`
}
console.log(book1.getInfo())

//🟨6. Object Methods:

var student =
{
    name: "Deep",
    age: 20,
    greet: function () {
        console.log(`Hello, my name is ${ this.name }, and i am ${ this.age } years old.`)

    }
}
student.greet()


//🟨7. Object Iteration:

for (var key in student)
{
    console.log(key + ": " + student[ key ])
}


//🟨8. Object Destructuring:

var { name,age } = student
console.log(name)
console.log(age)


//🟨9. Object Shorthand:

var username = "Bob"
age = 25
var user = { username,age }


//🟨10. Object Spread Operator:

var defaults = { color: "blue",fontSize: "16px" }
var customStyles = { ...defaults,fontSize: "20px" }
console.log(customStyles)


//🟨11. Object Prototypes and Inheritance:

var animal = {
    type: "Unknown",
    sound: "Noise",
    makeSound: function () {
        console.log(`${ this.type } makes a ${ this.sound }`)
    }
}
var dog = Object.create(animal)
dog.type = "Dog"
dog.sound = "Bark"
dog.makeSound()


//🟨12. Object Constructors and Classes:

class Person {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
    greet () {
        console.log(`Hello, my name is ${ this.name }, and i am ${ this.age } years old.`)
    }
}
var person1 = new Person("Deep",20)
person1.greet()


//🟨13. Object.defineProperty:

var man = { name: "Deep" }
Object.defineProperty(man,"age",{
    value: 30,
    writable: true,
    enumerable: true,
    configurable: true
})
man.age = 25
console.log(man.age)


//🟨14. Object.freeze and Object.seal:

var bike = { make: "BMW",model: "S100RR" }
Object.freeze(bike)
bike.year = 2022 // This assignment will be ignored
console.log(bike.year) //undefined

var laptop = { brand: "Apple",model: "m2" }
Object.seal(laptop)
laptop.model = "Dell" // Property modification is allowed
laptop.weight = "2lbs" // This assignment will be ignored=


//🟨15. Object.getPrototypeOf and Object.setPrototypeOf:

var person = { name: "Deep" }
var student = { major: "Compuer science" }

Object.setPrototypeOf(student,person)
console.log(student.name)


//🟨16. Object.keys, Object.values, and Object.entries:

var car = { make: "Ford",model: "mustang",year: 2023 }
console.log(Object.keys(car))
console.log(Object.values(car))
console.log(Object.entries(car))


// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


//🟨 ES6 Classes and Inheritance:

class Animal {
    constructor(name) {
        this.name = name
    }
    speak () {
        console.log(`${ this.name } makes a sound`)
    }
}
class Dog extends Animal {
    speak () {
        console.log(`${ this.name } barks`)
    }
}
var dog = new Dog("Buddy")
dog.speak()


//🟨 Getters and Setters:

class Circle {
    constructor(radius) {
        this._radius = radius
    }
    get radius () {
        return this._radius
    }
    set radius (newRadius) {
        if (newRadius >= 0)
        {
            this._radius = newRadius
        }
    }
    get area () {
        return Math.PI * this._radius ** 2
    }
}

var myCircle = new Circle(5)
console.log(myCircle.radius)
myCircle.radius = 7
console.log(myCircle.radius)
console.log(myCircle.area)


//🟨 Serialization and Deserialization:

var person = {
    name: "Deep",
    age: 30,
    hobbies: [ 'reading',"playing" ]
}

const jsonPerson = JSON.stringify(person)
console.log(jsonPerson)

const parsedPerson = JSON.parse(jsonPerson)
console.log(parsedPerson.name)


//🟨 Mapping and Filtering Objects:

var students = [
    { name: "Jack",score: 87 },
    { name: "Oggy",score: 92 },
    { name: "Olly",score: 71 }
]

var highScores = students.filter(student => student.score >= 90)
console.log(highScores)

var studentNames = students.map(student => student.name)
console.log(studentNames)