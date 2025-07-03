function trackTotal(initialValue) {
  let total = initialValue;
  console.log("Total: ", total);
  return function (increment) {
    console.log("Increment: ", increment);
    total += increment;
    return total;
  };
}

let track = trackTotal(1);

console.log(track(7));
console.log(track(5));
