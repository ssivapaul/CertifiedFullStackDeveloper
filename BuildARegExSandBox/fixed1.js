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

  let slicedString = sliceTestString(text, regEx);

  // Update result box
  if (slicedString.length > 0) {
    testResult.textContent = slicedString.map((str) => str[1]).join(", ");
  } else {
    testResult.textContent = "no match";
  }

  // Highlight matches
  if (slicedString.length > 0) {
    stringToTest.innerHTML =
      slicedString
        .map((str) => {
          return `${str[0]}<span class="highlight">${str[1]}</span>`;
        })
        .join("") + (slicedString.at(-1)[2] || "");
  } else {
    stringToTest.textContent = text;
  }
});

let sliceTestString = (text, regEx) => {
  let result = [];
  let lastIndex = 0;

  if (regEx.global) {
    let match;
    while ((match = regEx.exec(text)) !== null) {
      result.push([
        text.slice(lastIndex, match.index), // before match
        match[0], // matched string
        "", // after handled separately
      ]);
      lastIndex = match.index + match[0].length;
    }
    // Add remaining tail as final "after" string
    if (lastIndex < text.length) {
      result[result.length - 1][2] = text.slice(lastIndex);
    }
  } else {
    let match = regEx.exec(text);
    if (match) {
      result.push([
        text.slice(0, match.index),
        match[0],
        text.slice(match.index + match[0].length),
      ]);
    }
  }

  return result;
};


/*
PROBLEMS IDENTIFIED
🔴 Test 12 & 15 (First match highlighting)
When using a non-global regex (/.../ without g), your code doesn't slice the string correctly after the match. It doesn’t include the tail string after the match in the final result.

🔴 Test 14 (Case-insensitive & global match for 'G')
Case-insensitive flag isn't producing matches like G and g together.

Your highlight logic doesn't handle both before, match, and after for multiple matches.

🔴 Test 18 (Displaying all matches in #result)
When global flag is on, you're not extracting match[0] for display in result correctly.

✅ SOLUTION
We will:

Fix sliceTestString() to handle both global and single match modes correctly.

Always include before, match, and after for single match.

For global, also store the string tail (after last match) for correct rendering.

Return the full triple [before, match, after] consistently.

Update #result generation accordingly.


WHAT'S FIXED NOW
Test #	Fix
12	First match only is now correctly wrapped and includes tail
14	Case-insensitive + global highlights all G or g
15	All matches are highlighted with <span class="highlight">
18	Global matches displayed in #result properly
19	Matches shown correctly in #result

*/