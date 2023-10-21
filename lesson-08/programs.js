//🟨1. Creating Objects using Object Literal Notation:

let person = {
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

let car = {
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

let book1 = new Book("Science book","Einsteine",1998)
let book2 = new Book("Maths book","Newton",1998)

console.log(book1.title)


//🟨5. Object Prototypes:

Book.prototype.getInfo = function () {
    return `${ this.title } by ${ this.author } in year ${ this.year }`
}
console.log(book1.getInfo())