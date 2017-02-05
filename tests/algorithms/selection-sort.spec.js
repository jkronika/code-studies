/**jshint esversion: 6 */
/**global describe, it, expect */

let chai = require("chai");
let sort = require("../../public/javascripts/algorithms/selection-sort");

let expect = chai.expect;

describe("Selection Sort", function() {
    Object.keys(sort.approaches).forEach(function(approach) {
        it("can sort a list using " + approach, function() {
            let method = sort.approaches[approach];
            expect(method([3, 2, 4])).to.eql([2, 3, 4]);
            expect(method([0, 1, 2, 0])).to.eql([0, 0, 1, 2]);
        });
    });
})