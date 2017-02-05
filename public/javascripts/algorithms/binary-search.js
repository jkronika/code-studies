module.exports = {
    approaches: {
        "a while loop":  function(list, target)  {
            let min = 0;
            let max = list.length - 1;
            let guess, currValue;
            let guesses = 0;

            while (max >= min) {
                guess = Math.floor((max + min) / 2);
                guesses++;
                currValue = list[guess];
                if (currValue === target) {
                    return guess;
                } else if (currValue > target) {
                    max = guess - 1;
                } else if (currValue < target) {
                    min = guess + 1;
                }
            }

            return -1;
        },
        "recursion": function(list, target) {
            function search(l, t) {
                let guess = Math.floor((l.length - 1) / 2);
                let value = l[guess];

                if (value < t) {
                    guess = (guess + 1) + search(l.slice(guess + 1), t)
                } else if (value > t) {
                    guess = search(l.slice(0, guess), t);
                }

                return guess;
            }

            return search(list, target);
        }
    }
};