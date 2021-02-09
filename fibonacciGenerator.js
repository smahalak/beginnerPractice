// fib sequence 0, 1 , 1, 3, 5 , 8, 13 , 21 , 34 , 55 
// every number is the sum of the two previous numbers
// return an array of fibonacci numbers starting from 0


function fibbonacciGenerator (n) {

    let output =[];

if (n === 1 ) {
    output = [0];
    }
else if (n === 2) {
    output = [0,1];
}

else {
    output = [0,1];

    for (var i = 2; i < n; i++) {    // the i = 2 represents the existing numbers in our output [0,1]

    output.push(output[output.length -2] + output[output.length -1]);
    
        }

    }
    
    return output;
    

}


output = fibbonacciGenerator (0);
console.log(output);