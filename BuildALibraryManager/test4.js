const multiply = (a) => (b) => a * b ** 2;
const operations = [multiply(1), multiply(2)];
let mul1 = multiply(2);
console.log(mul1(3));
console.log(multiply(2)(7));
const result = operations.reduce((acc, fn) => fn(acc), 2);
console.log(result);
