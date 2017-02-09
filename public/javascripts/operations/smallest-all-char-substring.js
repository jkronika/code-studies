function allCharsBruteForce(input, chars) {
    chars = chars || input.split("").reduce(function(list, char) { // n
        if (list.indexOf(char) < 0) {
            list.push(char);
        }
        return list;
    }, []);

    if (typeof chars === "string") {
        chars = chars.split("");
    }

    let shortest = null;

    for (let i = 0, j; i <= input.length - chars.length; i++) { // n - c >> (n - c)(n - b + d)
        let found = [];
        for (j = i; j < input.length && found.length < chars.length; j++) { // n - b
            let char = input[j];
            if (chars.indexOf(char) < 0) {
                break;
            } else if (found.indexOf(char) < 0) {
                found.push(char);
            }
        }

        let substr = input.substr(i, j-i); // 1
        if (found.length === chars.length &&
                (!shortest || substr.length < shortest.length)) { // 1
            shortest = substr;
        }
    }

    return shortest || "";
} // n(n-b+d) - c(n-b+d) >> n^2-bn+nd-cn+cb-cd >> O(n^2)



module.exports = {
    approaches: {
        "brute force": allCharsBruteForce
    }
};