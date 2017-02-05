/**jshint esversion: 6 */
/**global describe, it, expect */

let chai = require("chai");
let sort = require("../../public/javascripts/algorithms/insertion-sort");

let expect = chai.expect;

describe("Insertion Sort", function() {
    Object.keys(sort.approaches).forEach(function(approach) {
        it("can sort a list using " + approach, function() {
            let method = sort.approaches[approach];
            expect(method([3, 2, 4])).to.eql([2, 3, 4]);
            expect(method([0, 1, 2, 0])).to.eql([0, 0, 1, 2]);
            expect(method([22, 11, 99, 88, 9, 7, 42])).to.eql([7, 9, 11, 22, 42, 88, 99]);
            expect(method([4, 1, 17, 14, 43, 23, 68, 82, 83, 32, 44, 57])).to.eql([1, 4, 14, 17, 23, 32, 43, 44, 57, 68, 82, 83]);
        });
    });
})