
const { LocalStorage } = require("node-localstorage");
const localStorage = new LocalStorage("./scratch");

const sampleBookmarks = [
  { id: 1, title: "freeCodeCamp", url: "https://www.freecodecamp.org" },
  { id: 2, title: "MDN Web Docs", url: "https://developer.mozilla.org" },
];

// Convert to JSON string and store in localStorage
localStorage.setItem("bookmarks", JSON.stringify(sampleBookmarks));

function getBookmarks() {
  const bookmarks = localStorage.getItem("bookmarks");
  return bookmarks ? JSON.parse(bookmarks) : [];
}

const bookmarksArray = getBookmarks();
console.log(bookmarksArray);
  

[
  { id: 1, title: "freeCodeCamp", url: "https://www.freecodecamp.org" },
  { id: 2, title: "MDN Web Docs", url: "https://developer.mozilla.org" },
];
  