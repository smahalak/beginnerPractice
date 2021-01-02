function golfScore (par, strokes) {
    if (strokes == 1) {
        return "Wow a hole in one!"
    }
    else if (strokes == par -2) {
        return "Nice eagle!"
    }
    else if (strokes == par -1) {
        return "Nice birdie!" 
    }
    else if (strokes == par) {
        return "Adequate job." 
    }
    else if (strokes == par + 1) {
        return "A booogey" 
    }
    else if (strokes == par + 2) {
        return "Double boge" 
    }
    else {
        return "You should practice"
    }
}

    console.log(golfScore(4,2));