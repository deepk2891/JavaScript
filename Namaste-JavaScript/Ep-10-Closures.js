// function x () {
//   var a = 7  
//   function y () {
//     console.log(a);
//   }
//   a = 100
//   return y
// }
// var z = x()
// console.log(z);
// z()

function z () {
  b = 900
  function x () {
    var a = 7
    function y () {
      console.log(a,b);
    }
    a = 100
    y()
  }
  x()
}
z()

// > Uses of Closures
// - Module Design Pattern
// - Currying
// - Functions Like Once
// - Memorize
// - maintaining state in async world
// - setTimeOuts
// - Iterators
// - and many more...