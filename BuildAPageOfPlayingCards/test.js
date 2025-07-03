/*

function multiplesOf3Or5(number) {
    let sum = 0;
    let i = 3;
    while (i < number) {
      if (!(i % 3) || (i >=5 && !(i % 5))) {
          sum += i;
          console.log(sum);
        }
        
        i++;
    }
    return sum;
}

console.log(multiplesOf3Or5(10));
*/

function fibonacciIterative(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
  
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }
  
  // Example usage:
console.log(fibonacciIterative(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
