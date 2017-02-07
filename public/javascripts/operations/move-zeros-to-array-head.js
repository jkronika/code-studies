function moveIterative(array) {
    let r = array.length - 1;
    let c = 0;

    while (r >= 0) {
        if (array[r - c] === 0) {
            // increment count of zeros
            c++;
        } else if (c > 0 && r > c) {
            // copy value to right
            array[r] = array[r - c];
            r--;
        } else {
            // skip non-zero value
            r--;
        }
    }

    while (c > 0) {
        array[--c] = 0;
    }

    return array;
}

module.exports = {
    approaches: {
        iteration: moveIterative,
    }
}