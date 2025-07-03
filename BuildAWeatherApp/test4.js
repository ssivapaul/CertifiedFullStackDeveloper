//const regex = /freeCodeCamp/gi;
//console.log(regex.test("freecodecamp is great"));


const regex1 = /free(code)camp/i;
//console.log(regex1.test("freecodecamp"));
//console.log("freecodecamp".match(regex1));
//console.log("freecodecamp".replace(regex1, "paidcodeworld"));

const regex2 = /free(co+de)camp/i;
console.log("freecoooooooodecamp".replace(regex2, "paidcodeworld"));

const regex3 = /free(co+de)camp/i;
console.log("freecoooooooodecamp".replace(regex3, "paid$1world")); // paidcooooooooworld