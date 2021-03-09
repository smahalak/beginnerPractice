"use strict";
// 1 Write a function that gets the sum of all values of an array

let addValues = (arr) => {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
// console.log(addValues([5, 2, 2]));

let addValues2 = (arr) => {
    let sum = 0;
    arr.forEach((number) => {
        sum += number
    })
    return sum;
}



// console.log(addValues2([55, 2, 2]));


let addStuff = (arr) => {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        count += arr[i]
    }
    return count;
}

let numbers = [1, 2, 3, 4, 5]
console.log(addStuff(numbers));

// 2 Write a function that returns the average in an array of numbers

let averageNum = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i] / arr.length;
    }
    return total;
}
// console.log(averageNum([5, 2, 2]));


const findAverage = (arrOfNum) => {
    return arrOfNum.reduce((accumulator, currentValue) => {
        return accumulator += currentValue
    }) / arrOfNum.length
}

let array = [1, 2, 3, 4, 5]
console.log(findAverage(array));


// 3 Write a function that returns the longest string in an array of strings

let findLongestWord = (str) => {
    let longest = "";
    let words = str.split(" ");

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}
// console.log(findLongestWord("Cool kids play on the javascript playground"));


const findLongestString = (anArrayOfStrings) => {
    return anArrayOfStrings.reduce((accumulator, currentValue) => {
        return currentValue.length > accumulator.length ? currentValue : accumulator;
    })
}

let strings = ['apple', 'banana', 'kiwi']
// console.log(findLongestString(strings));


let findLong = (arr) => {
    let currentLongest = arr[0];

    arr.forEach((item) => {
        if (item.length > currentLongest.length) {
            currentLongest = item
        }
    })

    return currentLongest;

}

console.log(findLong(strings));






// 4 Write a function that counts the number of vowels in a string

let vowelCounter = (word) => {
    let counter = 0;

    for (let i = 0; i < word.length; i++) {
        if (word[i] == "a" || word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i] == "u") {
            counter++;
        };
    }
    return counter;
}

// console.log(vowelCounter('javascript'));


//level II
// 1 Write a function that returns the common values of two arrays
// let arr1 = ["a", "a", "b", "b", "c", "y"];
// let arr2 = ["a", "a", "b", "b", "c", "z"];
// console.log(commonValues(arr1, arr2));
// returns: [ 'a', 'b', 'c' ]

// let commonValues = (arr1, arr2) => {
//     let common = [];

//     for (let i = 0; i < arr1.length; i++) {

//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 common.push(arr1[i]);
//             }
//         }
//     }
//     return common;

// }

// console.log(commonValues(["a", "a", "b", "b", "c", "y"], ["a", "a", "b", "b", "c", "z"]));



let sameVal = (arra1, arra2) => {
    let common = []

    for (let i = 0; i < arra1.length; i++) {
        if (arra2.includes(arra1[i]) && !common.includes(arra1[i])) {
            common.push(arra1[i])
        }
    }
    return common;
}

console.log(sameVal(["a", "a", "b", "b", "c", "y"], ["a", "a", "b", "b", "c", "z"]));

let commonVal = (arr1, arr2) => {
    let matches = [];
    let unique = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) !== -1) {
            matches.push(arr1[i]);
        } else {
            for (let j = 0; j < arr2.length; j++) {
                if (arr1.indexOf(arr2[i]) !== -1) {
                    matches.push(arr2[i]);
                }
            }
        }

        matches.forEach((item) => {
            if (!unique.includes(item)) {
                unique.push(item);
            }
        });
    }
    return unique;
}

// console.log(commonVal(["a", "a", "b", "b", "c", "y"], ["a", "a", "b", "b", "c", "z"]));



// 2 Write a function that returns the unique values of two arrays
// let arr1 = ["a", "a", "b", "b", "c", "y"];
// let arr2 = ["a", "a", "b", "b", "c", "z"];
// console.log(uniqueValues(arr1, arr2));
// returns: [ 'y', 'z' ]

// 3 Write a function that removes the duplicates from an array. Return that array
// let arr1 = ["a", "a", "b", "b", "c", "y"];
// console.log(removeDuplicates(arr1));
// returns: [ 'a', 'b', 'c', 'y' ]

let removeDuplicates = (arr) => {
    let array = [];

    arr.forEach((item) => {
        if (!array.includes(item)) {
            array.push(item);
        }
    })
    return array;
}

console.log(removeDuplicates(['a', 'a', 'b', 'b', 'c']));

// 4 Write a function that returns a string with vowels removed
// console.log(removeVowels("Mitchell"));
// returns: Mtchll

let removeVowels = (word) => {
    word = word.toLowerCase();
    let newWord = '';

    for (let i = 0; i < word.length; i++) {
        if (word[i] !== "a" && word[i] !== "e" && word[i] !== "i" && word[i] !== "o" && word[i] !== "u") {
            newWord += word[i];
        }
    }
    return newWord;
}

// console.log(removeVowels('Mitchell'));


// 5 Given an array of objects, write a function that returns the object that has the fewest calories
// let objects = [{ calories: 75 }, { calories: 70 }, { calories: 80 }];
// console.log(fewestCalories(objects));
// returns: { calories: 70 }

let fewestCalories = (arr) => {
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].calories < min.calories) {
            min = arr[i];
        }
    }
    return min;
}

let objects = [{ calories: 75 }, { calories: 70 }, { calories: 80 }];
// console.log(fewestCalories(objects));



// 6 Fizzbuzz - Starting at 1, count up to a number (parameter) and console.log the following:
// Multiples of three - “fizz”
// Multiples of five - “buzz”
// Multiples of three && five - “fizzbuzz”
// All others return the current number

function hammerTime() {

    let output = [];

    for (let count = 1; count < 101; count++) {
        if (count % 15 === 0) {
            output.push("hammertime");
        }
        else if (count % 3 === 0) {
            output.push("hammer");
        }
        else if (count % 5 === 0) {
            output.push("time");
        } else {
            output.push(count);
        }
    }
    console.log(output)

}

// hammerTime();



// 7 Write a function that determines whether a number is prime
// A number is prime if it is only divisible by 1 and itself

let isPrime = (num) => {

    if (num < 2) {
        return 'not a prime number'
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return 'not a prime number'
        } else {
            return 'prime number'
        }
    }

}

// console.log(isPrime(5));

// 8 Write a function that determines whether a string is a palindrome
// A palindrome is a word that has the same spelling forward and backward

// let reverseString4 = (str) => {

//     let revString = "";

//     for (let char of str) {
//       revString = char + revString;
//     }

//     return revString;
//   }

// console.log(reverseString4("javascript is cool"));


// let isPalindrome = (str) => {

//     let revString = "";

//     for (let char of str) {

//         revString = char + revString;
//     }

//     return revString === str;

// }


// console.log(isPalindrome("racecar"));

let reverseString = (str) => {

    let reverse = "";

    for (let i = str.length - 1; i >= 0; i--) {

        reverse = reverse + str[i];
    }
    return reverse === str;
}


// console.log(reverseString('eye'));

// Level Three
// Write a function that determines whether two strings are an anagram
// Two words are an anagram if the letters of one can be rearranged to form the other



