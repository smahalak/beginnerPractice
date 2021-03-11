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

console.log(countPairs(numOfSocks, sockDrawer));