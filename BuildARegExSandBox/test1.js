//const text = "The rain345 in Spa678in";
//const pattern = /\d{3}/g;
/*
const matches = [...text.matchAll(pattern)];

function sliceStringAtIndexes(str, indexes) {
    let result = [];
    let prevIndex = 0;
  
    for (const index of indexes) {
      result.push(str.slice(prevIndex, index));
      prevIndex = index;
    }
    result.push(str.slice(prevIndex));
    return result;
  }
  */
  // Example
  //const str = "The rain345 in Spa678in";
  //const indexes = [8, 18];
  //const slicedStrings = sliceStringAtIndexes(str, indexes);
//console.log("SlicedStrings: ", slicedStrings); // Output: [""]
  
//const text = "The rain345 in Spa678in";
//const text = "Gu1n34 P1g5"
//const pattern = /\d+/g;
/*
let sliceTestString = (str, patn) => {
    let previndex = 0;
    let stringtotest = [];
    const matches = [...str.matchAll(patn)];
    matches.map((x) => {
        stringtotest.push([text.slice(previndex, x.index), x[0]]);
        previndex = x.index + x[0].length;
    });
    return stringtotest;
}

console.log(sliceTestString(text, pattern));

    testResult.textContent = matchStrings.length > 0
            ? `${matchStrings.join(", ")}`
            : "No matches found.";
*/

let text = "She sells seashells by the seashore"
let pattern = "/seas/i";
//She sells seashells by the seashore. /sea\s/i
let sliceTestString = (text, regEx) => {
  console.log(text, regEx);
  let previndex = 0;
  let stringtotest = [];

  if (regEx.toString().includes("g")) {
    let matches = [...text.matchAll(regEx)];
    matches.map((x) => {
      stringtotest.push([text.slice(previndex, x.index), x[0]]);
      previndex = x.index + x[0].length;
    });
    if (previndex < text.length && previndex != 0) {
      console.log(previndex, text.length - 1);
      stringtotest.push([text.slice(previndex), ""]);
    }
  } else {
    let match = regEx.exec(text);
    stringtotest.push([
      text.slice(0, match.index),
      match[0],
      text.slice(match.index + match[0].length),
    ]);
  }

  return stringtotest;
};

console.log(sliceTestString(text, pattern));