let chunkArrayInGroups = (arr, size) => {
  let groups = [];
  while (arr.length > 0) {
    groups.push(arr.splice(0, size));
  }
  return groups;
};

console.log(chunkArrayInGroups(["a", "b", "c", "d", "e", "f"], 2));

//the above splice method removes from the origianl array while slice does not

let chunkArrayInGroups2 = (arr, size) => {
  let groups = [];
  while (arr.length > 0) {
    groups.push(arr.slice(0, size));
    arr = arr.slice(size); //this is the extra line of coded needed because the slice method is being used
  }
  return groups;
};

console.log(chunkArrayInGroups2(["a", "b", "c", "d", "e", "f"], 3));

//Return the remaining elements of an array after chopping off n elements from the head

let slasher = (arr, howMany) => {
  return arr.splice(0, howMany);
};

console.log(slasher([1, 2, 3], 2));

console.log(slasher(["burger", "fries", "shake"], 1));

// return true or false if the letters in the second argument are also in the first argument

let mutation = (arr) => {
  let firstWord = arr[0].toLowerCase();
  let secondWord = arr[1].toLowerCase();

  for (let letter of secondWord) {
    if (firstWord.indexOf(letter) === -1) return false;
  }

  return true;
};

console.log(mutation(["hello", "heyo"]));




// Say n = 4
// sss# i=0, s=3, #=1
// ss## i=1, s=2, #=2
// s### i=2, s=1, #=3
// #### i=3, s=0, #=4

// space = n - i - 1;
// # = i + 1;

let staircase = (n) => {
  for (let i = 0; i < n; i++) {
    let string = "";
    for (let j = 0; j < n - i - 1; j++) {
      string += " ";
    }
    for (let k = 0; k < i + 1; k++) {
      string += "#";
    }
    console.log(string);
  }

}

staircase(4)


//Rotate array left 
// 4 rotations
// expected [5, 1, 2, 3, 4]

// let rotateLeft = (arr, rotations) => {
//   let rotatedArray = arr.concat();

//   for (let i = 0; i < rotations; i++) {
//     let frontItem = rotatedArray.shift();   //shift removes from the first element in an array, pop removes from the last
//     rotatedArray.push(frontItem);
//   }

//   return rotatedArray
// }

// Another way without using concat
let rotateLeft = (arr, rotations) => {

  for (let i = 0; i < rotations; i++) {
    let frontItem = arr.shift();  //shift removes from the first element in an array, pop removes from the last
    arr.push(frontItem);
  }

  return arr;
}



let numberOfRotations = 4;
let sampleArray = [1, 2, 3, 4, 5]
console.log(rotateLeft(sampleArray, numberOfRotations));



// sock merchant
// output 3 pairs of socks
let numOfSocks = 9
let sockDrawer = [1, 2, 2, 1, 1, 3, 5, 1, 2]

let countPairs = (n, sockArray) => {
  let sockHashMap = {};
  let totalPairs = 0;

  sockArray.forEach((item) => {
    if (!sockHashMap[item]) {
      sockHashMap[item] = 1;
      return;
    } else {
      totalPairs++;
      delete sockHashMap[item];
    }
  })
  return totalPairs
}

// console.log(countPairs(numOfSocks, sockDrawer));

//another sock merchant


let numOfLongSocks = 8;
let sockPile = [10, 20, 10, 50, 20, 10, 30, 10];
let sortAndCount = (n, arr) => {
  let sorted = arr.sort((a, b) => a - b);
  //[10,10,10,10,20,20,30,50]
  let pairs = 0;

  for (let i = 0; i < n - 1; i++) {
    if (sorted[i] === sorted[i + 1]) {
      pairs++;
      i += 1;
    }
  }
  return pairs;

}

// console.log(countPairs(numOfLongSocks, sockPile));



// Given an array find the min and max values that can be calculated by summing four of the five integers. 
// [1,3,5,7,9]
// min is 1+3+5+7 and max is 3+5+7+9
// returns 16 24 

let specialArray = [1, 3, 5, 7, 9]
let miniMaxSum = (arr) => {
  let max = arr[0];
  let min = arr[0];
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
    total += arr[i];
  }

  let maxSum = total - min;
  let minSum = total - max;

  return (minSum + " " + maxSum);
}

// console.log(miniMaxSum(specialArray));

//grading students
// If difference between grade and next multiple of 5 is less than 3, round grade up to the next multiple of five
// If grade is less than 38, no rounding occurs

let grades = [4, 73, 67, 38, 33]
let gradingStudents = (grades) => {
  for (let i = 0; i < grades.length; i++) {
    if ((grades[i] >= 38) && ((((grades[i] % 5) == 3)) || ((grades[i] % 5) == 4))) {
      grades[i] = grades[i] + (5 - (grades[i] % 5))
    }
  }
  return grades;
}

// console.log(gradingStudents(grades));

//compare triplets
// player will get a point if their number is higher than other player
// Alice's [5, 6, 7]
// Bob's [3, 6, 10]
// output 1  1 

let Alice = [5, 6, 7];
let Bob = [3, 6, 10];

let compareTriplets = (a, b) => {
  let aPoints = 0;
  let bPoints = 0;
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      aPoints++;
    }
    if (b[i] > a[i]) {
      bPoints++;
    }
  }
  return [aPoints, bPoints]
}

console.log(compareTriplets(Alice, Bob));