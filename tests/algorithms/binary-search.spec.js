/**jshint esversion: 6 */
/**global describe, it, expect */

let chai = require("chai");
let search = require("../../public/javascripts/algorithms/binary-search");

let expect = chai.expect;

describe("Binary Search", function() {
    let primes;

    beforeEach(function() {
        primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
            41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    });

    Object.keys(search.approaches).forEach(function(approach) {
        describe("using " + approach, function() {
            let method = search.approaches[approach];

            it("performs a successful search", function() {
                expect(method(primes, 23)).to.equal(8);
                expect(method(primes, 73)).to.equal(20);
                expect(method(primes, 13)).to.equal(5);
                expect(method(primes, 43)).to.equal(13);
            });
        });
    });
});