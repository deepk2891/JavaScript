function cb () {
  console.log("Callback");
}

setTimeout(cb,5000); // Does'nt take exactly 5000 ms but it guarantees that it takes atleast 5000 ms  And maybe Anytime after that...

// Comment clarified:
// setTimeout does not guarantee that the callback method will be called exactly after 5 seconds.
// It might take slightly longer if the call stack is busy.

console.log("Start");
setTimeout(function cb () {
  console.log("Callback");
},5000);
console.log("End");

let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000)
{
  endDate = new Date().getTime();
}
console.log("while expires");


// Why JS has only one callsatck ?
// Synchronous single threaded language 
// it has just 1 main thread and 1 call satck
// all the pieces of code executed there inside
// it makes interpreted language and it runs very fast even inside browser

// you dont have to wait for compiled just like languages
// it hase just in time compilation

// we can still do asynchronous operations


setTimeout(function deep () {
  console.log("-------- Less Important... it Might be on 4th page or not at priority  --------");
},0)

// In short Defer some piece of  code
// After completed execution of whole thread it goes into callback queue and then callstack run that function