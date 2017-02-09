let Queue = require("../data-structures/Queue");

function iterativeBinarySearch(list, target) {
    let min = 0;
    let max = list.length - 1;
    let guess, currValue;
    let guesses = 0;

    while (max >= min) {
        guess = Math.floor((max + min) / 2);
        guesses++;
        currValue = list[guess];
        if (currValue === target) {
            return guess;
        } else if (currValue > target) {
            max = guess - 1;
        } else if (currValue < target) {
            min = guess + 1;
        }
    }

    return -1;
}

function recursiveBinarySearch(list, target) {
    let guess = Math.floor((list.length - 1) / 2);
    let value = list[guess];

    if (value < target) {
        guess = (guess + 1) + recursiveBinarySearch(list.slice(guess + 1), target)
    } else if (value > target) {
        guess = recursiveBinarySearch(list.slice(0, guess), target);
    }

    return guess;
}

module.exports = {
    iterativeBinarySearch: iterativeBinarySearch,
    recursiveBinarySearch: recursiveBinarySearch,

    approaches: {
        "iteration": iterativeBinarySearch,
        "recursion": recursiveBinarySearch,
    }
};