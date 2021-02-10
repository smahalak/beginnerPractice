let findLongestWord = (str) => {
  let words = str.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) longest = word; // 1st iteration: is 3 longer than 0? yes, so then the becomes the word
  }

  console.log(longest.length);
};

findLongestWord("The quick brown fox jumped over the lazy dog");

//===method2======

let findLongestWord2 = (str) => {
  let longest = str.split(" ").sort(function (a, b) {
    return b.length - a.length;
  })[0];

  console.log(longest);
};

findLongestWord2("The quick brown fox jumped over the lazy dog");

//======= largest numbers in arrays

let largestOfFour = (array) => {
  let max = [];
  for (let i = 0; i < array.length; i++) {
    let tempMax = array[i][0]; //prints the first number in each array

    // console.log(array[i]);   //prints each array
    for (let j = 0; j < array[i].length; j++) {
      //console.log(array[i][j]);  // prints each number

      let currentElement = array[i][j];
      if (currentElement >= tempMax) {
        //looks at each first number and compares with the next number in its array to see if its larger, then goes onto the next array
        tempMax = currentElement;
      }
    }
    max.push(tempMax);
  }
  console.log(max);
};

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
