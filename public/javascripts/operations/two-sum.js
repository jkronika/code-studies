module.exports = {
    approaches: {
        "sort then search": function(nums, target) {
            var sorted = nums.slice(0);
            var i1, i2, v1, v2, i, l;

            sorted.sort(numericSort);

            for (i = 0, l = nums.length - 1; i < l; i+= 1) {
                v1 = sorted[i];
                i2 = sorted.indexOf(target - v1, i+1);

                if (i2 > i) {
                    i1 = nums.indexOf(v1);
                    v2 = sorted[i2];
                    i2 = nums.indexOf(v2, (v1 === v2) ? i1+1 : 0);
                    return [i1, i2].sort(numericSort);
                }
            }

            function numericSort(a, b) {
                return a-b;
            }
        }
    }
};