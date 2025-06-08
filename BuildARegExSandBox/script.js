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
  //const text = "Gu1n34 P1g5";
  //const pattern = /\d+/g;
  let flags = getFlags();
  const pattern = regexPattern.value.trim();
  const regEx = new RegExp(pattern, flags);
  let slicedString = sliceTestString(text, regEx);

  testResult.textContent =
    slicedString.length > 0
      ? slicedString.map((str) => `${str[1]}`).join(", ")
      : `no match`;

  let highlightedHTML = slicedString
    .map((str) => {
      return `${str[0]}<span class="highlight">${str[1]}</span>`;
    })
    .join("");

  if (slicedString.length > 0) {
    let lastMatch = slicedString[slicedString.length - 1];
    let lastIndex = text.lastIndexOf(lastMatch[1]);
    let remaining = text.slice(lastIndex + lastMatch[1].length);
    highlightedHTML += remaining;
  } else {
    highlightedHTML = text;
  }

  stringToTest.innerHTML = highlightedHTML;
});

let sliceTestString = (text, regEx) => {
  let previndex = 0;
  let stringtotest = [];
  let matches = [...text.matchAll(regEx)];
  matches.map((x) => {
    stringtotest.push([text.slice(previndex, x.index), x[0]]);
    previndex = x.index + x[0].length;
  });
  return stringtotest;
};
