let reverseString = (str) => {
  let strArray = str.split(""); //.split converts a string into an array
  let reverseStrArray = strArray.reverse(); // ["o", "l", "l", "e", "h"]
  let reversedString = reverseStrArray.join("");
  console.log(reversedString);
};

reverseString("hello");

//===method 2

let reverseString2 = (str) => {
  let reversed = str.split("").reverse().join("");

  console.log(reversed);
};

reverseString2("hello");

//===method 3

let reverseString3 = (str) => {
  let final = "";
  for (var i = str.length - 1; i >= 0; i--) {
    // console.log(str[i]);
    final += str[i];
  }
  console.log(final);
};

reverseString3("hello");
