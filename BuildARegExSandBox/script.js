let regexPattern = document.getElementById("pattern");
let stringToTest = document.getElementById("test-string");
let testButton = document.getElementById("test-btn");
let testResult = document.getElementById("result");
let caseInsensitiveFlag = document.getElementById("i");
let globalFlag = document.getElementById("g");

let getFlags = () => {
  let flags = "";
  flags += caseInsensitiveFlag.checked ? "i" : "";
  flags += globalFlag.checked ? "g" : "";
  return flags;
};

testButton.addEventListener("click", () => {
  let text = stringToTest.textContent.trim();
  let flags = getFlags();
  const pattern = regexPattern.value.trim();
  const regEx = new RegExp(pattern, flags);

  let slicedString = [];
  slicedString = sliceTestString(text, regEx);
  stringToTest.innerHTML = "";
  testResult.textContent = "";

  if (slicedString.length > 0) {
    if (slicedString.length == 1) {
      stringToTest.innerHTML = slicedString
        .map((str) => {
          return `${str[0]}<span class="highlight">${str[1]}</span>${str[2]}`;
        })
        .join("");
    } else {
      stringToTest.innerHTML = slicedString
        .map((str) => {
          return str[1]
            ? `${str[0]}<span class="highlight">${str[1]}</span>`
            : `${str[0]}`;
        })
        .join("");
    }
    let testresult = [];
    slicedString.forEach((x) => {
      if (x[1]) testresult.push(x[1]);
    });
    testResult.textContent = `${testresult.join(", ")}`;
  } else {
    stringToTest.innerHTML = text;
    testResult.textContent = `no match`;
  }
});

//She sells seashells by the seashore. /sea\s/i
let sliceTestString = (text, regEx) => {
  let previndex = 0;
  let stringtotest = [];

  if (regEx.toString().includes("g")) {
    let matches = [...text.matchAll(regEx)];
    if (matches) {
      matches.map((x) => {
        stringtotest.push([text.slice(previndex, x.index), x[0]]);
        previndex = x.index + x[0].length;
      });
      if (previndex < text.length && previndex != 0) {
        stringtotest.push([text.slice(previndex), ""]);
      }
    }
  } else {
    let match = regEx.exec(text);
    if (match) {
      stringtotest.push([
        text.slice(0, match.index),
        match[0],
        text.slice(match.index + match[0].length),
      ]);
    }
  }
  return stringtotest;
};
