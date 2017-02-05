/**jshint esversion: 6 */
/**global describe, it, expect */

let chai = require("chai");
let sort = require("../../public/javascripts/algorithms/merge-sort");

let expect = chai.expect;

describe("Merge Sort", function() {
    Object.keys(sort.approaches).forEach(function(approach) {
        describe("using " + approach, function() {
            let method = sort.approaches[approach];

            it("returns an empty list unchanged", function() {
                expect(method([], 0, 0)).to.eql([]);
            });

            it("returns a list with one element unchanged", function() {
                expect(method([4], 0, 0)).to.eql([4]);
            });

            it("can arrange multi-item lists in order", function() {
                expect(method([3, 2, 4], 0, 2)).to.eql([2, 3, 4]);
                expect(method([0, 1, 2, 0], 0, 3)).to.eql([0, 0, 1, 2]);
                expect(method([22, 11, 99, 88, 9, 7, 42], 0, 6)).to.eql([7, 9, 11, 22, 42, 88, 99]);
                expect(method([4, 1, 17, 14, 43, 23, 68, 82, 83, 32, 44, 57], 0, 11)).to.eql([1, 4, 14, 17, 23, 32, 43, 44, 57, 68, 82, 83]);
            });
        });
    });
});