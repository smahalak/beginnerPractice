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
