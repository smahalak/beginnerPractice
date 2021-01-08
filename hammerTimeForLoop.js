//for loop version of hammerTime
let output = [];

function hammerTime() {
    for (let count = 1; count < 101; count++) {
        if (count % 3 === 0 && count % 5 === 0) {
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

}
    console.log (output)
    

}

hammerTime();