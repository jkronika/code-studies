function insert(array, rightIndex, value) {
    let i;
    for (i = rightIndex; i >= 0 && array[i] > value; i--) {
        array[i+1] = array[i];
    }
    array[i+1] = value;
}

module.exports = {
    approaches: {
        "slide from right": function(array) {
            let i, l;
            for (i = 1, l = array.length; i < l; i++) {
                insert(array, i-1, array[i]);
            }
            return array;
        }
    }
};