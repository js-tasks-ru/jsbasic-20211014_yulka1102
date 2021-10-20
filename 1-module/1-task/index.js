let n;
function factorial(n) {
  let x = 1;
  for (let i = n; i > 0; i--) {
    x = x * i;
  }

return x;
}
alert(factorial(0));
alert(factorial(1));
alert(factorial(3));
alert(factorial(5));