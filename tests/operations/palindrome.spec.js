/**jshint esversion: 6 */
/**global describe, it, expect */

let chai = require("chai");
let palindrome = require("../../public/javascripts/operations/palindrome");

let expect = chai.expect;

describe("Palindrome", function() {
    Object.keys(palindrome.approaches).forEach(function(approach) {
        describe("using " + approach, function() {
            let method = palindrome.approaches[approach];

            it("correclty identifies an empty string", function() {
                expect(method("")).to.be.true;
            });

            it("correctly identifies a single character", function() {
                expect(method("a")).to.be.true;
                expect(method("m")).to.be.true;
                expect(method("z")).to.be.true;
            });

            it("correctly identifies multicharacter palindromes", function() {
                expect(method("motor")).to.be.false;
                expect(method("rotor")).to.be.true;
                expect(method("gallant")).to.be.false;
                expect(method("tattarrattat")).to.be.true;
            });
        });
    });
})