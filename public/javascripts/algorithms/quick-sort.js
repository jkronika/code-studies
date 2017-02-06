function swap(array, a, b) {
    let tmp = array[a];
    array[a] = array[b];
    array[b] = tmp;
}

function partition(array, p, r) {
    let q = p;
    let j = p;
    let pivot = array[r];

    while(j < r) {
        if (array[j] <= pivot) {
            swap(array, j, q);
            q++;
        }

        j++;
    }

    swap(array, r, q);
    return q;
}

function quickSort(array, p, r) {
    if (p < r) {
        let q = partition(array, p, r);
        quickSort(array, p, q-1);
        quickSort(array, q+1, r);
    }
    return array;
}

module.exports = {
    approaches: {
        "recursion": quickSort
    }
};