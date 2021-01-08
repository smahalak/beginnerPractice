//Program prints the numbers from 1 to 100. But for multiples of three prints "hammer," instead of the number,
//and for multiples of five it prints "time." For numbers divisible by 3 and 5 , prints "hammertime"

var output = [];
var count = 1;

function hammerTime() {

    output.push(count);

    while (count <= 100) {

        if (count % 3 && 5 === 0) {
    output.push("hammertime");
} 
else if (count % 3 === 0) {
    output.push("hammer");
} 
else if  (count % 5 === 0) {
    output.push("time");
} else {
    output.push(count);
}

    count++;
    }
    console.log(output);
}

hammerTime();