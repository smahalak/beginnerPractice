
let numberOfBottles = 99;

function beer () {

    while (numberOfBottles >= 1)
    {
        if(numberOfBottles != 1) {
        
            console.log (numberOfBottles + " bottles of beer on the wall, " + numberOfBottles + " bottles of beer. Take one down and pass it around, " + (numberOfBottles -1) + " bottles of beer on the wall.");
    }

    else {
        console.log (numberOfBottles + " bottle of beer on the wall, " + numberOfBottles + " bottle of beer. take one down and pass it around, no more bottles of beer on the wall.");
    }

    numberOfBottles--;

}

console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some beer, 99 bottles of beer on the wall.");

}

beer();