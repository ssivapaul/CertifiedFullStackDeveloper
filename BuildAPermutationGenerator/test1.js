function changeString(str) {
    
    if (str === "") return "";
    console.log(str);
  return changeString(str.slice(1)) + str[0];
}

//console.log(changeString('Hello'))
console.log('Hello'.slice(1))