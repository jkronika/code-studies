function exponent(num, power) {
    let result;
    if (power === 0) {
        result = 1;
    } else if (power < 0) {
        result = 1 / exponent(num, -power);
    } else if (power % 2 === 0) {
        let half = exponent(num, power / 2);
        result = half * half;
    } else {
        result = num * exponent(num, power - 1);
    }
    return result;
}

module.exports = {
    approaches: {
        recursion: exponent
    }
};