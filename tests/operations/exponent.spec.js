/**jshint esversion: 6 */
/**global describe, it, expect */

let chai = require("chai");
let exponent = require("../../public/javascripts/operations/exponent");

let expect = chai.expect;

describe("Exponential calculation", function() {
    Object.keys(exponent.approaches).forEach(function(approach) {
        describe("using " + approach, function() {
            let method = exponent.approaches[approach];

            it("correct;y identifies any number to the power of zero as 1", function() {
                expect(method(1, 0)).to.equal(1);
                expect(method(42, 0)).to.equal(1);
                expect(method(-21, 0)).to.equal(1);
            });

            it("can calculate the value of a number to a positive power", function() {
                expect(method(3, 2)).to.equal(9);
                expect(method(4, 3)).to.equal(64);
                expect(method(5, 5)).to.equal(3125);
            });

            it("can calculate the value of a number to a negative power", function() {
                expect(method(3, -1)).to.equal(1/3);
                expect(method(4, -1)).to.equal(1/4);
            });
        });
    });
})