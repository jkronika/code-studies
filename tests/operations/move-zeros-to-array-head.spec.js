/**jshint esversion: 6 */
/**global describe, it, expect */

let chai = require("chai");
let move = require("../../public/javascripts/operations/move-zeros-to-array-head");

let expect = chai.expect;

describe("Moving zeros to head of array", function() {
    Object.keys(move.approaches).forEach(function(approach) {
        describe("using " + approach, function() {
            let method = move.approaches[approach];

            it("returns an empty array unchanged", function() {
                expect(method([])).to.eql([]);
            });

            it("returns an array with all non-zero entries unchanged", function() {
                let original = [1, 2, 3, 4, -1, -2, -3, -4];
                let unchanged = [].concat(original);
                expect(method(original)).to.eql(unchanged);
            });

            it("returns an array with all zero entries unchanged", function() {
                let original = [0, 0, 0, 0, 0, 0];
                let unchanged = [].concat(original);
                expect(method(original)).to.eql(unchanged);
            });

            it("shifts interspersed zeros to the start of the array", function() {
                let original = [0, 1, 0, -1, 2, 0, 0, 0, -2, -3, 3, 0, 0, 4];
                let expected = [0, 0, 0, 0, 0, 0, 0, 1, -1, 2, -2, -3, 3, 4];
                expect(method(original)).to.eql(expected);
            });
        });
    });
})