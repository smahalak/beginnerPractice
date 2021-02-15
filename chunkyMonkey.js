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
