/**jshint esversion: 6 */
/**global describe, it, expect */

let chai = require("chai");
let factorial = require("../../public/javascripts/operations/factorial");

let expect = chai.expect;

describe("Factorial", function() {
    Object.keys(factorial.approaches).forEach(function(approach) {
        describe("using " + approach, function() {
            let method = factorial.approaches[approach];
            it("correctly finds the factorial of zero", function() {
                expect(method(0)).to.equal(1);
            });

            it("can determine the factorial of positive numbers", function() {
                expect(method(5)).to.equal(120);
                expect(method(8)).to.equal(40320);
                expect(method(12)).to.equal(479001600);
            });
        })
    });
})