function formatDate(date) {
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const day = String(date.getDate()).padStart(1, "0");
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
}


const date = new Date();
const formattedDate = date.toLocaleDateString("en-US", {
  month: "numeric",
  day: "numeric",
  year: "numeric",
});

console.log(formattedDate);