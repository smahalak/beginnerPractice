function leapYearCalc (year) {

    if (year % 4 === 0 && (year % 100 !== 0  || year % 400 === 0)) {
 return "That is a leap year!"
    }
    else {
        return "That is not a leap year."
    } 
} 

console.log(leapYearCalc(1700));