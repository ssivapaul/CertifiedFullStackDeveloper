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
  el.children[i].style.border = "2px dashed red";
  el.children[i + 1].style.border = "2px dashed red";
};

let startingArray = document.getElementById("starting-array");
let arrayContainer = document.getElementById("array-container");
let arraySiblings = arrayContainer.children;

let btnGenerate = document.getElementById("generate-btn");
btnGenerate.addEventListener("click", () => {
  for (let i = arraySiblings.length - 1; i >= 0; i--) {
    if (arraySiblings[i] !== startingArray) {
      arrayContainer.removeChild(arraySiblings[i]);
    }
  }
  fillArrContainer(startingArray, generateArray());
});

let btnSort = document.getElementById("sort-btn");
btnSort.addEventListener("click", () => {
  let spanArray = Array.from(arraySiblings[0].children);
  let spanContents = spanArray.map((child) => Number(child.textContent));

  let i = 0;
  let n = 0;
  while (true) {
    i = i % 4;
    highlightCurrentEls(arraySiblings[n], i);
    swapElements(spanContents, i);
    let newChildArray = generateContainer();
    fillArrContainer(newChildArray, spanContents); // Fill the swapped array
    arrayContainer.appendChild(newChildArray);
    i++;
    n++;
    if (i == 3) {
      let index = arraySiblings.length;
      let prevSpanArray = Array.from(arraySiblings[index - 4].children);
      let prevSpanContents = prevSpanArray.map((child) =>
        Number(child.textContent)
      );
      console.log(prevSpanContents, spanContents, index, i, n);
      if (
        prevSpanContents.every(
          (prevContent, index) => prevContent == spanContents[index]
        )
      ) {
        highlightCurrentEls(arraySiblings[n], i);
        let newChildArray = generateContainer();
        fillArrContainer(newChildArray, spanContents); // Fill the swapped array
        arrayContainer.appendChild(newChildArray);
        break;
      }
    }
  }
});
