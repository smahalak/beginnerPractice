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

// findLongestWord2("The quick brown fox jumped over the lazy dog");

//======= largest numbers in arrays

let largestOfFour = (array) => {
  let max = [];
  for (let i = 0; i < array.length; i++) {
    let tempMax = array[i][0]; //prints the first number in each array

    // console.log(array[i]);   //prints each array
    for (let j = 0; j < array[i].length; j++) {
      //console.log(array[i][j]);  // prints each number

      let currentElement = array[i][j];
      // console.log(currentElement);
      if (currentElement >= tempMax) {
        //looks at each first number and compares with the next number in its array to see if its larger, then goes onto the next array
        tempMax = currentElement;
      }
    }
    max.push(tempMax);
  }
  // console.log(max);
};

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);



let largestOfFour2 = (array) => {

  let empty = [];

  for (let i = 0; i < array.length; i++) {

    let tempMax = array[i][0]


    for (let j = 0; j < array[i].length; j++) {
      let currentElement = array[i][j];
      if (currentElement >= tempMax) {
        tempMax = currentElement;
      }
    }

    empty.push(tempMax);


  }

  return empty;

}

console.log(largestOfFour2([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]));




let reverseString = (str) => {

  let reverse = "";

  for (let i = str.length - 1; i >= 0; i--) {

    reverse = reverse + str[i];
  }
  return reverse;
}


// console.log(reverseString("javascript"));

////////////////////////////////////////////////////////
let reverseString2 = (str) => {
  // let backwards = str.split("");
  // backwards.reverse();
  // return backwards.join("");


  return str.split("").reverse().join("");
}


// console.log(reverseString2("javascript"));

////////////////////////////////////////////////////////

let reverseString3 = (str) => {

  let revString = "";

  for (let i = 0; i <= str.length - 1; i++) {

    revString = str[i] + revString;
  }


  return revString;
}

// console.log(reverseString3("javascript"));


/////////////////////////////////////////////////////////

let reverseString4 = (str) => {

  let revString = "";

  for (let char of str) {
    revString = char + revString;
  }

  return revString;
}

// console.log(reverseString4("javascript is cool"));


let isPalindrome = (str) => {

  let revString = "";

  for (let char of str) {

    revString = char + revString;
  }

  return revString === str;

}


console.log(isPalindrome("racecar"));



let reverseInt = (int) => {


  let reverse = int.toString().split("").reverse().join("");
  // return reverse;
  return parseInt(reverse);
}

// console.log(reverseInt(54321));


let capitalizeLetters = (str) => {
  let sentence = str.toLowerCase().split(" ");
  // console.log(sentence);

  for (let i = 0; i < sentence.length; i++) {

    console.log(sentence[i]);


    sentence[i] = sentence[i].slice(0, 1).toUpperCase() +  //substring looks at the first character; log shows ["i","l","j"] then add to upper and the rest o
      sentence[i].slice(1);                                   //decided to replace substring with slice

  }

  return sentence.join(' ');
}

// console.log(capitalizeLetters('I lOve jAVascript'));




// Staircase

function staircase(n) {

  for (let i = 0; i < n; i++) {
    let string = "";
    for (j = 0; j < n - i - 1; j++) {
      string += " ";
    }
    for (let k = 0; k < i + 1; k++) {
      string += "#";
    }
    console.log(string);
  }
}

// N = 4
// sss#  i=0, s=3, #=1
// ss##  i=1, s=2, #=2
// s###  i=2, s=3, #=3
// ####  i=3, s=0, #=4

// S = N - i - 1
// # = i + 1

staircase(4);