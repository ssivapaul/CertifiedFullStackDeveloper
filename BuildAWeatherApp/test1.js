function outerFunction(x) {
  let y = 10;
  function innerFunction() {
      y += x;
      console.log(y)
  }
  return innerFunction;
}

let closure = outerFunction(5);
closure(3); // 15
closure(2); 
