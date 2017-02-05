function palindrome(word) {
    let result = true;
    if (word.length > 1) {
        let last = word.length - 1;
        let inner = word.slice(1, last);
        result = word[0] === word[last] && palindrome(inner);
    }
    return result;
}

module.exports = {
    approaches: {
        recursion: palindrome
    }
};