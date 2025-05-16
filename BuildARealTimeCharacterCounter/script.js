let textInput = document.getElementById("text-input");
let charCount = document.getElementById("char-count");

textInput.addEventListener("input", () => {
  if (textInput.value.length >= 50) {
    charCount.style.color = "red";
    textInput.value = textInput.value.substring(0, 50);
    charCount.textContent = `Character Count: ${textInput.value.length}/50`;
  } else {
    charCount.style.color = "black";
    charCount.textContent = `Character Count: ${textInput.value.length}/50`;
  }
});
