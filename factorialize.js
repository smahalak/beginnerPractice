//give 5   1*2*3*4*5 = 120

let factorizlize = (num) => {
  let result = 1;
  for (i = 1; i <= num; i++) {
    result *= i;
    console.log(result);
  }
};

// factorizlize(5);




let fact = (num) => {

  let result = 1;
  for (i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}

// console.log(fact(5));




let mutation = (arr) => {
  let firstWord = arr[0].toLowerCase();
  let secondWord = arr[1].toLowerCase();

  for (let letter of secondWord) {
    if (firstWord.indexOf(letter) === -1) return false;
  }

  return true;
};

// console.log(mutation(["hello", "heyo"]));







let slasher = (arr, howMany) => {
  return arr.splice(0, howMany);
};

// console.log(slasher([1, 2, 3, 4, 5], 3));

// console.log(slasher(["burger", "fries", "shake"], 1));




let chunkArrayInGroups = (arr, size) => {
  let groups = [];
  while (arr.length > 0) {
    groups.push(arr.splice(0, size));
  }
  return groups;
};

// console.log(chunkArrayInGroups(["a", "b", "c", "d", "e", "f"], 3));




let findLongestWord = (str) => {

  let longest = "";
  let arrayOfStrings = str.split(" ");
  // console.log(array);


  for (word of arrayOfStrings) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest.length;

};

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));


let largestOfFour = (array) => {

  let largest = [];

  for (let i = 0; i < array.length; i++) {
    let tempMax = array[i][0];
    // console.log(tempMax);
    for (let j = 0; j < array[i].length; j++) {
      let currentElement = array[i][j];
      // console.log(currentElement);
      if (currentElement > tempMax) {
        tempMax = currentElement;
      }
    }

    largest.push(tempMax);
  }



  return largest;

};

// console.log(largestOfFour([
//   [4, 5, 1, 3],
//   [13, 27, 18, 26],
//   [32, 35, 37, 39],
//   [1000, 1001, 857, 1],
// ]));



let fizzbuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 == 0) {
      console.log("fizz");
    } else if (i % 5 == 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

// fizzbuzz();



let longestWord = (str) => {

  let wordArr = str.toLowerCase().match(/[a-z0-9]+/g);  //anything between a-z and also 0-9 the +g is global and makes it so it doesn't start at the first match
  // console.log(wordArr);

  //sorts the array form longest work to shortest
  let sorted = wordArr.sort((a, b) => {
    return b.length - a.length;
  });

  // console.log(sorted);
  // return sorted[0];  // well this doesn't work if there is more than 1 word that is the longest word

  const longestWordArr = sorted.filter((word) => {
    return word.length === sorted[0].length;
  })

  // if there is just 1 word then it will return the word as a string longestWordArr[0] otherwise it prints an array of strings
  if (longestWordArr.length === 1) {
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }

}

console.log(longestWord("The quick brown fox jumped over the lazy dog. It Barked."));


let vals = [5, 4, 1, 2, 9];

let answer = vals.reduce((acc, val) => {
  return acc + val
}, 0);

console.log(answer);


let vals2 = [5, 4, 1, 2, 10]

let biggest = vals.reduce((acc, val) => {
  if (val > acc) {
    acc = val;
  }
  return acc;
}, 11)

console.log(biggest);



let filterEvens = (array) => {
  let newArray = array.filter(item => item % 2 === 0);
  return newArray;
}

console.log(filterEvens([1, 2, 3, 4, 5, 6]));


let getEvenNumbers = (array) => {

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log(array[i]);
    }
  }
}

// getEvenNumbers([7, 8, 9, 10, 11, 12]);

//return an array of its values plus the value's index
//map creates a new array with the results of the calling the function on every element in the calling array

let selfPlusIndex = (array) => {
  let newArray = array.map((item, i) => item + i)
  return newArray;
}

// console.log(selfPlusIndex([1, 2, 3]));





let letterCounter = (array) => {

  let newArray = []
  for (item of array) {
    if (newArray[item] === undefined) {
      newArray[item] = 1;
    } else {
      newArray[item]++;
    }
  }
  return newArray;
}

console.log(letterCounter(['a', 'a', 'a', 'b', 'c', 'c']));