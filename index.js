function win(array) {
    if (array.result == "W") {
        return true
    }
}

function superbowlWin(array) {
    if (array.find(win)) {
        return array.find(win).year
    }
}
