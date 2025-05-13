let books = [
  {
    title: "someTitle1",
    authorName: "someAuther1",
    releaseYear: 2000,
  },
  {
    title: "someTitle2",
    authorName: "someAuther2",
    releaseYear: 1948,
  },
  {
    title: "someTitle3",
    authorName: "someAuther3",
    releaseYear: 2020,
  },
  {
    title: "someTitle4",
    authorName: "someAuther4",
    releaseYear: 1960,
  },
  {
    title: "someTitle5",
    authorName: "someAuther5",
    releaseYear: 2002,
  },
  {
    title: "someTitle6",
    authorName: "someAuther6",
    releaseYear: 1927,
  },
];

let sortByYear = (book1, book2) => {
  if (book1.releaseYear > book2.releaseYear) return 1;
  if (book1.releaseYear < book2.releaseYear) return -1;
  if (book1.releaseYear == book2.releaseYear) return 0;
};

let filteredBooks = books.filter((book) => book.releaseYear > 1950);
console.log(filteredBooks);
filteredBooks = filteredBooks.sort(sortByYear);
console.log(filteredBooks);
