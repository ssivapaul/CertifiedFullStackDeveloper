let currentDate = new Date();

let currentDateFormat = `Current Date and Time: ${currentDate}`;
console.log(currentDateFormat);

let formatDateMMDDYYYY = (date) => {
  const options = {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  };
  let formatedDate = date.toLocaleDateString("en-US", options);
  return `Formatted Date (MM/DD/YYYY): ${formatedDate}`;
};

console.log(formatDateMMDDYYYY(currentDate));

let formatDateLong = (date) => {
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  let formatedDate = date.toLocaleDateString("en-US", options);
  return `Formatted Date (Month Day, Year): ${formatedDate}`;
};

console.log(formatDateLong(currentDate));
