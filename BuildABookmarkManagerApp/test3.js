let data1 = [
  {
    name: "",
    category: "Education",
    url: "https://www.freecodecamp.org",
  },
  { name: "MDN", category: "Reference", url: "https://developer.mozilla.org" },
];

let data= [
  {
    name: "",
    category: "",
    url: "",
  },
  { name: "", category: "", url: "" },
];

/*
let validData = (data) => {
    if (Array.isArray(data) && data.every((b) => b && typeof b === "object" && "name" in b && "category" in b && "url" in b)) {
        return data
    } else return []
}
*/

let valiData = (data) => {
    data.every(
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
    );
}
console.log(validData(data));


/*
function getBookmarks() {
  const data = localStorage.getItem('bookmarks');
  try {
    const bookmarks = JSON.parse(data);
    if (
      Array.isArray(bookmarks) &&
      bookmarks.every(
        (b) =>
          b &&
          typeof b === 'object' &&
          Object.keys(b).length === 3 &&
          typeof b.name === 'string' && b.name.trim() !== '' &&
          typeof b.category === 'string' && b.category.trim() !== '' &&
          typeof b.url === 'string' && b.url.trim() !== ''
      )
    ) {
      return bookmarks;
    }
  } catch (e) {
    // JSON.parse failed — do nothing, return []
  }
  return [];
}

*/