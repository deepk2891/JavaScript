// What is a callback Function in Javascript ?

// 🟨Functions are first class citizens in javascript
// function pass into another function is called Callback Function.

setTimeout(() => {
  console.log("Timer⏰");
},1000);
function x (y) {
  console.log("x");
  y()
}
x(function z () {
  console.log("y");
})

//-----------------------------------------------------------
// Javascript is synchronous and single-threaded language


// -----------------------------------------------------------
//  Blocking the main thread


// -----------------------------------------------------------
// Power of Callbacks ?


// -----------------------------------------------------------
// Deep about Event Listeners


// -----------------------------------------------------------
// Clossures demo with Event Listeners


// -----------------------------------------------------------
// Scope demo with Event Listeners


// -----------------------------------------------------------
// Garbage Collection & removeEventListeners



function attachEventListener () {
  let count = 0
  document.getElementById('clickMe').addEventListener("click",() => {
    console.log("Button Click",++count);
  });
}
attachEventListener()