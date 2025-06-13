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

let btnGenerate = document.getElementById("generate-btn");
btnGenerate.addEventListener("click", () => {
  const startingArray = document.getElementById("starting-array");
  const arrayContainer = document.getElementById("array-container");
  const children = arrayContainer.children;
  for (let i = children.length - 1; i >= 0; i--) {
    if (children[i] !== startingArray) {
      arrayContainer.removeChild(children[i]);
    }
  }
  fillArrContainer(startingArray, generateArray());
});

let btnSort = document.getElementById("sort-btn");
btnSort.addEventListener("click", () => {
  let arrayContainer = document.getElementById("array-container");
  let spanArray = [];
  let originalSpanContents = [];
  let newSpanContents = [];
  let spanContents = [];
  let children = arrayContainer.children;
  let originalSpanArray = Array.from(children[0].children);
  originalSpanContents = originalSpanArray.map((child) =>
    Number(child.textContent)
  );

  for (let i = 0; i < 4; i++) {
    newSpanContents = swapElements(originalSpanContents, i); // Swap Elements, if need
    let newChildArray = generateContainer();
    arrayContainer.appendChild(newChildArray);
    fillArrContainer(newChildArray, newSpanContents); // Fill the swapped array
    if (i == 3) {
      spanArray = Array.from(children[i + 1].children);
      spanContents = spanArray.map((child) => Number(child.textContent));
      if (
        !spanContents.every((val, index) => val === originalSpanContents[index])
      ) {
      }
    }
  }
});
