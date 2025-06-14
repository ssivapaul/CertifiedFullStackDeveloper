let permuteString = (str, prefix, result) => {
  if (str.length == 0) {
    if (!result.includes(prefix)) {
      // Ensures uniqueness
      result.push(prefix);
    }
    return result;
  }
  str.split("").forEach((c, i) => {
    let s = str.slice(0, i) + str.slice(i + 1);
    let p = prefix + str[i];
    permuteString(s, p, result);
  });
  return result;
};

let str = "far";
let prefix = "";
let result = [];

let per = permuteString(str, "", []);

console.log(per);
