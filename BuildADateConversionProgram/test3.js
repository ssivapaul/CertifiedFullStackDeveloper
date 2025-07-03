function curriedAdd(a) {
    console.log("a:", a)
    return function (b) {
      console.log("b:", b)
    return a + b;
  };
}


const addFive = curriedAdd(3)
//console.log(curriedAdd(3)(4)); // Output: 7
console.log(addFive(2))
