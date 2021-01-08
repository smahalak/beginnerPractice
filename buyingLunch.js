let names = ["Steven","Tony", "Ben", "Eddy", "Dylan"]

function buyingLunch () {
    let numberOfPeople = names.length;
    let randomPosition = Math.floor(Math.random() * numberOfPeople); // calculates 0 through 4.99999. Then wrap that in Math.floor so its 0 through 4
    let randomPerson = names [randomPosition];

    console.log(randomPerson + " is going to buy lunch today!");
}



buyingLunch(names);