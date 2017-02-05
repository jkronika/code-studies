/**jshint esversion: 6 */
/**global describe, it, expect */

let chai = require("chai");
let swap = require("../../public/javascripts/operations/swap");

let expect = chai.expect;

describe("Swap", function() {
    Object.keys(swap.approaches).forEach(function(approach) {
        it("switches the values in two indices of a given list using " + approach, function() {
            let method = swap.approaches[approach];
            expect(method([3, 2, 4], 0, 1)).to.eql([2, 3, 4]);
            expect(method([0, 1, 2, 0], 2, 3)).to.eql([0, 1, 0, 2])
        });
    });
})