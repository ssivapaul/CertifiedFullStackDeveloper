testButton.addEventListener("click", () => {
  let text = stringToTest.textContent.trim();
  let flags = getFlags();
  const pattern = regexPattern.value.trim();

  const regEx = new RegExp(pattern, flags);
  let slicedString = sliceTestString(text, regEx);

  // Display result (matched values only)
  testResult.textContent =
    slicedString.length > 0
      ? slicedString.map((str) => str[1]).join(", ")
      : "no match";

  // Build highlighted string
  let highlightedHTML = slicedString
    .map((str) => {
      return `${str[0]}<span class="highlight">${str[1]}</span>`;
    })
    .join("");

  // Add the remaining part of the string
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
  let result = [];
  let lastIndex = 0;

  for (const match of text.matchAll(regEx)) {
    result.push([text.slice(lastIndex, match.index), match[0]]);
    lastIndex = match.index + match[0].length;
  }

  return result;
};

