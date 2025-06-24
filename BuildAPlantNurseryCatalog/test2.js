const myMap = new Map();
myMap.set("name", "Alice");
myMap.set(1, "one");

console.log(myMap.get("name")); // Alice
console.log(myMap.has(1)); // true
myMap.delete("name");
console.log(myMap.size); // 1
