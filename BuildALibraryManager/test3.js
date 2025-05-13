let numbers = [2, 4, 8, 10];

numbers.forEach(function (number) {
  console.log(number % 2);
});
console.log("---------------------");
numbers.forEach((number) => {
  console.log(number % 2);
});
