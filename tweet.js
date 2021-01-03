let tweet = prompt("Compose your tweet: ");

let tweetCount = tweet.length;

let remainingCharacters = 280 - tweetCount;

console.log("You have used " + tweetCount + " characters. You still have " + remainingCharacters + " left to use.");
