// Clossure : function with its lexical scope bundle together forms a clossure.

// Each and every function has access to their parent environment elements.


// function outer (b) {
//   var a = 10
//   function inner () {
//     console.log(a,b);
//   }
//   return inner
// }
// // outer()()

// var close = outer("hello b")
// close()


function outest () {
  var c = 20
  function outer (b) {
    var a = 10
    function inner () {
      console.log(a,b,c)
    }
    return inner
  }
  return outer
}

var close = outest()("hello b");
close()



// 🟨Advantages of Clossure :
//   🟩 it is used in module pattern
//   🟩 function currying
//   🟩 function memooize, once
//   🟩 data hiding & Encapsulation & data privacy
//     ✅ if we have a variable, we want some data privacy over it, so other variables and functions can't access that data
// ------------------
//     🚩Example:
// ------------------
// function counter () {
//   var count = 0
//   return function incrementCounter () {
//     count++
//     console.log(count);
//   }
// }
// console.log(counter) // Wo'nt work

// var counter1 = counter() // permission to access counter
// counter1()
// counter1()

// var counter2 = counter()
// counter2()
// counter2()

// ----------------------------------
//  🚩 Using constructor  Scalable Code
// ----------------------------------
function Counter () {
  var count = 0
  this.increseCounter = function () {
    count++
    console.log(count);
  }
  this.decreseCounter = function () {
    count--
    console.log(count);
  }
}
var counter1 = new Counter()
counter1.increseCounter()
counter1.increseCounter()
counter1.increseCounter()

counter1.decreseCounter()
counter1.decreseCounter()
counter1.decreseCounter()

// 🟨Disadvantages of Clossures :
//   🟩 over consuption of memory

// 🟨Garbage Collector :
//     a program in browser or in the js engine which kind of freeze up the unutilized memory
//     so whenever there was some unused variables it kind of like just takes it out of memory
//     it freeze the memory when it finds that variable not needed.

// 🟨Relation in between Garbage collector and Clossure :
function a () {
  var x = 0
  return function b () {
    console.log(x);
  }
}
var y = a()
y()

// 🟨Garbage Collector 
function d () {
  var e = 0,z = 10
  return function b () {
    console.log(e);
  }
}
var y = d()
y()
// console.log(z);  // Garbage collected
