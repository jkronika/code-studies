function divide(dividend, divisor) {
    let positive = (dividend < 0) === (divisor < 0);
    let result = 0;

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    if (divisor === 0) {
        result = Number.MAX_SAFE_INTEGER;
    } else {
        while (dividend >= divisor) {
            let temp = divisor;
            let i = 1;
            while (dividend >= temp) {
                dividend -= temp;
                result += i;
                i <<= 1;
                temp <<= 1;
            }
        }
    }

    if (!positive) {
        result = -result;
    }

    return result;
}

module.exports = {
    approaches: {
        "bitwise shift": divide
    }
};