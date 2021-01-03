let name = prompt("What is your name? ");

let bigLetter = name.slice (0,1);

let capitalLetter = bigLetter.toUpperCase();

let restOfName = name.slice (1,name.length);

let lowerLetters = restOfName.toLowerCase();

alert ("Pleased to meet you " + capitalLetter + lowerLetters + " : )");

