//first letter in each word must return with a capital letter

let titleCase = (str) => {
  let words = str.toLowerCase().split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1); //var name = john; console.log(name.slice(1)) returns ohn
  }
  console.log(words); //close but it returns an array, not the string from the argument
  console.log(words.join(" "));
};

titleCase("I'm a little tea pot");
