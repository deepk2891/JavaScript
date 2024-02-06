var x = 1
a()
b()
console.log(x);

function a () {
    var x = 10
    console.log(x);
}
function b () {
    x = 100
    console.log(x);
}
