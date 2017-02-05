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
                console.log("searching for", t, "in", JSON.stringify(l));
                let guess = Math.floor((l.length - 1) / 2);
                let value = l[guess];

                if (value < t) {
                    console.log(guess, "too small (", value, ")");
                    guess = (guess + 1) + search(l.slice(guess + 1), t)
                } else if (value > t) {
                    console.log(guess, "too big (", value, ")");
                    guess = search(l.slice(0, guess), t);
                }

                console.log("found at", guess, t, list[guess]);
                return guess;
            }

            return search(list, target);
        }
    }
};