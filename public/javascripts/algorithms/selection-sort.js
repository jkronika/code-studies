module.exports = {
    approaches: {
        "linear search": function(list) {
            for (let i = 0, l = list.length; i < l; i++) {
                let lowest = i;

                for (let j = i+1; j < l; j++) {
                    if (list[j] < list[lowest]) {
                        lowest = j;
                    }
                }

                if (lowest !== i) {
                    let tmp = list[i];
                    list[i] = list[lowest];
                    list[lowest] = tmp;
                }
            }

            return list;
        },
        "binary search": function(list) {

        }
    }
};