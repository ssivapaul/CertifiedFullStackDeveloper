const text = "The rain345 in Spa678in fa34lls main6564lyin t35he plain.";
const pattern = /\d{3}\D{3}/g;

const matches = text.matchAll(pattern);
//console.log(matches.map((m) => m[0])); // Output: ["ain", "ain", "ain", "ain"]
//console.log(Object.values(matches[0]))
for (let x of matches) {
    console.log(x)
}
