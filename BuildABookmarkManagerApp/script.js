//const { LocalStorage } = require("node-localstorage");
//const localStorage = new LocalStorage("./scratch");

let mainsection = document.getElementById("main-section");
let addbookmarkbutton = document.getElementById("add-bookmark-button");
let viewcategorybutton = document.getElementById("view-category-button");
let addbookmarkbuttonform = document.getElementById("add-bookmark-button-form");
let closeformbutton = document.getElementById("close-form-button");
let closelistbutton = document.getElementById("close-list-button");
let deletebookmarkbutton = document.getElementById("delete-bookmark-button");
let formsection = document.getElementById("form-section");
let bookmarklistsection = document.getElementById("bookmark-list-section");
let categorydropdown = document.getElementById("category-dropdown");
let categoryname = document.querySelectorAll(".category-name");
let categorylist = document.getElementById("category-list");
let bookname = document.getElementById("name");
let url = document.getElementById("url");

let bookmarks = [];

/*
bookmarks = [
  { name: "John", category: "News", url: "https://www.freecodecamp.org" },
  {
    name: "Paul",
    category: "Entertainment",
    url: "https://developer.mozilla.org",
  },
];
*/

let getBookmarks = () => {
  const data = localStorage.getItem("bookmarks");
  try {
    const bookmarks = JSON.parse(data);
    if (
      Array.isArray(bookmarks) &&
      bookmarks.every(
        (b) =>
          b &&
          typeof b === "object" &&
          Object.keys(b).length === 3 &&
          typeof b.name === "string" &&
          b.name.trim() !== "" &&
          typeof b.category === "string" &&
          b.category.trim() !== "" &&
          typeof b.url === "string" &&
          b.url.trim() !== ""
      )
    ) {
      return bookmarks;
    }
  } catch (e) {
    // JSON.parse failed — do nothing, return []
  }
  return [];
};

let displayOrCloseForm = () => {
  mainsection.classList.toggle("hidden");
  formsection.classList.toggle("hidden");
};

let displayOrHideCategory = () => {
  mainsection.classList.toggle("hidden");
  bookmarklistsection.classList.toggle("hidden");
};

addbookmarkbutton.addEventListener("click", () => {
  categoryname[0].innerText = categorydropdown.value;
  displayOrCloseForm();
});

addbookmarkbuttonform.addEventListener("click", () => {
  let newKey = {
    name: bookname.value,
    category: categoryname[0].innerText,
    url: url.value,
  };
  bookmarks = [...getBookmarks(), newKey];
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  bookname.value = "";
  categoryname.innerText = "";
  url.value = "";
  displayOrCloseForm();
});

viewcategorybutton.addEventListener("click", () => {
  categoryname[1].innerText = categorydropdown.value;
  bookmarks = getBookmarks();
  let selected = bookmarks.filter(
    (bookmark) => bookmark.category === categorydropdown.value
  );

  if (selected.length === 0) {
    categorylist.innerHTML = `<p>No Bookmarks Found</p>`;
  } else {
    categorylist.innerHTML = "";
    selected.forEach((bookmark) => {
      let line = document.createElement("p");
      line.style.display = "flex";
      let radio = document.createElement("input");
      radio.type = "radio";
      radio.id = bookmark.name;
      radio.value = bookmark.name;
      radio.name = "NameChoice";
      let label = document.createElement("label");
      label.type = "label";
      label.htmlFor = bookmark.name;
      label.innerHTML = `<a href = "${bookmark.url}">${bookmark.name}</a>`;
      line.appendChild(radio);
      line.appendChild(label);
      categorylist.appendChild(line);
    });
  }
  displayOrHideCategory();
});

deletebookmarkbutton.addEventListener("click", () => {
  const selectedRadio = document.querySelector(
    'input[name="NameChoice"]:checked'
  );
  let index = bookmarks.findIndex(
    (book) =>
      book.category == categorydropdown.value &&
      book.name == selectedRadio.value
  );
  if (index != -1) {
    bookmarks.splice(index, 1);
    let parentContainer = selectedRadio.parentNode;
    categorylist.removeChild(parentContainer);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
});

closelistbutton.addEventListener("click", () => {
  displayOrHideCategory();
});

closeformbutton.addEventListener("click", () => {
  displayOrCloseForm();
});

//localStorage.clear(bookmarks)
