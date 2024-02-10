if (true)
{// block - wrapping up multiple statements
    // Compound Statement
    var a = 10
    console.log(a);
}

if (true) console.log("NOT in Block");


// Block scope means what all variables and functions we can access inside this block
var a = 100
let b = 100
const c = 100
{
    // Hoisted in Global-Scope
    var a = 10

    // Block-Scope : These are hoisted in separate memory space that is reserved for this Block.
    let b = 20 // this value of b is shadowing the value of global scope let b = 100
    const c = 30

    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);
