function merge(array, p, q, r) {
    let low = [].concat(array.slice(p, q+1));
    let high = [].concat(array.slice(q+1, r+1));
    let i = 0;
    let j = 0;

    while (j < high.length) {
        array[p++] = (i >= low.length || high[j] < low[i]) ? high[j++] : low[i++];
    }

    while (i < low.length) {
        array[p++] = low[i++];
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