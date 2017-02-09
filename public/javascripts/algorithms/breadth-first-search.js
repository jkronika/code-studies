let Queue = require("../data-structures/Queue");

function iterativeBinarySearch(list, target) {
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
}

function recursiveBinarySearch(list, target) {
    let guess = Math.floor((list.length - 1) / 2);
    let value = list[guess];

    if (value < target) {
        guess = (guess + 1) + search(list.slice(guess + 1), target)
    } else if (value > target) {
        guess = recursiveBinarySearch(list.slice(0, guess), target);
    }

    return guess;
}

function iterativeBreadthFirstSearch(graph, source) {
    let result = [];
    let queue = new Queue();

    queue.enqueue(source);

    for (let i = 0, l = graph.length; i < l; i++) {
        result[i] = {
            distance: null,
            predecessor: null
        };
    }

    result[source].distance = 0;

    while (!queue.isEmpty()) {
        let predecessor = queue.dequeue();

        graph[predecessor].forEach(function(vertex) {
            let current = result[vertex];

            if (current.distance === null) {
                current.distance = result[predecessor].distance + 1;
                current.predecessor = predecessor;
                queue.enqueue(vertex);
            }
        });
    }

    return result;
}

module.exports = {
    iterativeBinarySearch: iterativeBinarySearch,
    recursiveBinarySearch: recursiveBinarySearch,

    approaches: {
        "iteration": iterativeBreadthFirstSearch
    }
};