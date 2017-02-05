/**jshint esversion: 6 */
/**global describe, it, expect */

let chai = require("chai");
let binarySearch = require("../../public/javascripts/algorithms/binary-search");

let expect = chai.expect;

describe("Binary Search", function() {
    let primes;

    beforeEach(function() {
        primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
            41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    });

    Object.keys(binarySearch.approaches).forEach(function(approach) {
        it("performs a successful search using " + approach, function() {
            let search = binarySearch.approaches[approach];
            expect(search(primes, 23)).to.equal(primes.indexOf(23));
            expect(search(primes, 73)).to.equal(primes.indexOf(73));
            expect(search(primes, 13)).to.equal(primes.indexOf(13));
            expect(search(primes, 43)).to.equal(primes.indexOf(43));
        });
    });
})