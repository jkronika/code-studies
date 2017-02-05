function iterativeFactorial(num) {
    let result = 1;

    for (let i = 1; i <= num; i++) {
        result *= i;
    }

    return result;
}

function recursiveFactorial(num) {
    return (num <= 0) ? 1 : num * recursiveFactorial(num - 1);
}

module.exports = {
    approaches: {
        iteration: iterativeFactorial,
        recursion: recursiveFactorial
    }
};