module.exports = {
    approaches: {
        "temporary variable": function (array, firstIndex, secondIndex) {
            let tmp = array[firstIndex];
            array[firstIndex] = array[secondIndex];
            array[secondIndex] = tmp;
            return array;
        }
    }
}
