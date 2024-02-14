function x () {
  for (let i = 1; i <= 5; i++)
  {
    console.log(i);
    function close (x) {
      setTimeout(() => {
        console.log(x);
      },x * 1000);
    }
    close(i)
  }

  console.log("Namaste JavaScript");
}
x()