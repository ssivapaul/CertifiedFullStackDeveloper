let generateElement = () => {
  return Math.floor(Math.random() * 100) + 1;
};

let generateArray = () => {
  let arr = [];
  for (let x = 0; x < 5; x++) {
    arr.push(generateElement());
  }
  return arr;
};

console.log(generateArray());

let generateContainer = () => {
  return document.createElement("div");
};

let fillArrContainer = (el, ar) => {
  let content = "";
  for (let i = 0; i < 5; i++) {
    content += `<span>${ar[i]}</span>`;
  }
  el.innerHTML = content;
  return el;
};

let isOrdered = (a, b) => {
  return a <= b ? true : false;
};

let swapElements = (a, i) => {
  if (!isOrdered(a[i], a[i + 1])) {
    [a[i], a[i + 1]] = [a[i + 1], a[i]];
  }
  return a;
};

let highlightCurrentEls = (el, i) => {
  el.children[i].style.border = "1px dashed red";
  el.children[i + 1].style.border = "1px dashed red";
};

let btn = document.getElementById("generate-btn");
btn.addEventListener("click", () => {
  let startingArray = document.getElementById("starting-array");
  fillArrContainer(startingArray, generateArray());
});
