const jsonString = '{"name":"Siva", "age":30}';
const obj = JSON.parse(jsonString);

console.log(obj.name); // "Siva"
console.log(obj.age); // 30
console.log(obj)
console.log(jsonString)

function getBookmarks() {
  const data = localStorage.getItem("bookmarks");
  try {
    const bookmarks = JSON.parse(data);
    // Check if it's a valid array of objects with the required keys
    if (
      Array.isArray(bookmarks) &&
      bookmarks.every(
        (b) =>
          b &&
          typeof b === "object" &&
          "name" in b &&
          "category" in b &&
          "url" in b
      )
    ) {
      return bookmarks;
    }
  } catch (e) {
    // JSON was invalid, fall through to return []
  }
  return [];
}