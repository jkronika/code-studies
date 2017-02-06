/**jshint esversion: 6 */
/**global describe, it, expect */

let chai = require("chai");
let division = require("../../public/javascripts/algorithms/division");

let expect = chai.expect;

describe("Division", function() {
    Object.keys(division.approaches).forEach(function(approach) {
        describe("using " + approach, function() {
            let method = division.approaches[approach];

            it("yields the original number when dividing by 1", function() {
                expect(method(3, 1)).to.equal(3);
            });

            it("yields the maximum integer value when dividing by 0", function() {
                expect(method(3, 0)).to.equal(Number.MAX_SAFE_INTEGER);
            });

            it("yields the integer divisibility factor for positive numbers", function() {
                expect(method(15, 3)).to.equal(5);
                expect(method(43, 7)).to.equal(6);
            });

            it("yields a positive integer divisibility factor for negative numbers", function() {
                expect(method(-30, -5)).to.equal(6);
                expect(method(-29, -9)).to.equal(3);
            });

            it("yields a negative integer divisibility factor for mixed sign numbers", function() {
                expect(method(16, -4)).to.equal(-4);
                expect(method(-18, 5)).to.equal(-3);
            });
        });
    });
});