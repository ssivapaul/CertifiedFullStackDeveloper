const myMap = new Map();
let set1 = new Set()
set1.add(2)
set1.add(1);
set1.add(7);
set1.add(14);

myMap.set("option1", set1);
let set2 = new Set();
set2.add(10);
set2.add(9);
set2.add(3);
set2.add(23);

myMap.set('option2', set2);
/*
console.log(myMap.get("option1")); // {2, 1, 7, 14}
console.log(myMap.has('option2')); // true
console.log(myMap)
console.log(myMap.values())
console.log(myMap.keys());
console.log(myMap.size); // 2

myMap.set('a', 1)
myMap.set('a', 2)
console.log(myMap.get("a"));
*/

const set = new Set([1, 2, 3]);
set.values().forEach(s => console.log(s))

const map = new Map([
  ["a", 1],
  ["b", 2],
]);
map.clear();
console.log(map.size);