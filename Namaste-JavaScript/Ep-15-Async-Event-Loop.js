function a () {
  console.log("a");
}
a()
console.log("End");

// Callstack is in js Engine is in Browser

console.log(("Start"));

setTimeout(function cb () {
  console.log("Callback");
},5000)
console.log("End");

console.log("Start");
document.getElementById("clickMe").addEventListener("click",function cb () {
  console.log("Callback")
})
console.log("End");

// 🟨Event Loop : Continuously monitor callstack and callback queue
//                ... If this call stack is empty and EventLoop sees this there is also a function waiting to be executed inside callbackQueue...
//                it just takes the function and put it inside the callstack... and callback method is quickly executed...

// Promises Mutation Observer 

console.log("start");
setTimeout(function cbT () {
  console.log("CB Netflix");
},5000);

fetch("https://api.netflix.com").then(function cbF () {
  console.log("CB Netflix");
})
console.log("End");


// Callstack :   │                                              │
//               │                                              │
//               │                                              │
//               │                                              │
//               │  2nd cbT => Run => Removed from callstack    │
//               │  1st cbF => Run => Removed from callstack    │


// Micro Task Que   :│ cbF │  │  │  │  │  │  │  │  │  │  │  │  │         // prioritized  1st goes into callstack

// Callback Queue   :│ cbT │  │  │  │  │  │  │  │  │  │  │  │  │         // after cbF


//   1  Start
//   2  End
//   3  cbF
//   4  cbT