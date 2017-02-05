function merge(array, p, q, r) {
    let low = [].concat(array.slice(p, q+1));
    let high = [].concat(array.slice(q+1, r+1));

    while (high.length) {
        array[p++] = (!low.length || high[0] < low[0]) ? high.shift() : low.shift();
    }

    while (low.length) {
        array[p++] = low.shift();
    }
}

function mergeSort(array, p, r) {
    if (p < r) {
        let q = Math.floor((p + r) / 2);
        mergeSort(array, p, q);
        mergeSort(array, q+1, r);
        merge(array, p, q, r);
    }
    return array;
}

module.exports = {
    approaches: {
        "recursion": mergeSort
    }
};