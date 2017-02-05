

function tower(pegs) {
    function spare(current, target) {
        return Object.keys(pegs).reduce(function (found, key) {
            if (!found && key !== current && key !== target) {
                found = key;
            }
            return found;
        }, null);
    }

    function shift(num, current, target) {
        if (num > 0) {
            let spareKey = spare(current, target);
            shift(num - 1, current, spareKey);
            pegs[target].push(pegs[current].pop());
            shift(num - 1, spareKey, target);
        }
    }

    shift(pegs.a.length, "a", "b");

    return pegs;
}

module.exports = {
    approaches: {
        "recursion": tower
    }
};