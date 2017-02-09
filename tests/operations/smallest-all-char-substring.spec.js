/**jshint esversion: 6 */
/**global describe, it, expect */

let chai = require("chai");
let search = require("../../public/javascripts/operations/smallest-all-char-substring");

let expect = chai.expect;

describe("Smallest Substring containing All Chars", function() {
    Object.keys(search.approaches).forEach(function(approach) {
        describe("using " + approach, function() {
            let method = search.approaches[approach];

            it("returns empty strings unchanged", function() {
                expect(method("")).to.equal("");
            });

            it("returns the entire string when containing only unique characters", function() {
                expect(method("a")).to.equal("a");
                expect(method("abdc")).to.equal("abdc");
            });

            it("returns the shortest substring when chars are duplicated", function() {
                expect(method("abbcda")).to.equal("bcda");
                expect(method("adcbba")).to.equal("adcb");
            });

            it("can work off of a custom alphabet", function() {
                expect(method("abbcda", "abc")).to.equal("abbc");
                expect(method("acdbabac", "bcd")).to.equal("cdb");
            });

            it("ignores an empty custom alphabet", function() {
                expect(method("abbcda", "")).to.equal("bcda");
            });

            it("returns an empty string when characters in the custom alphabet are not found", function() {
                expect(method("a", "b")).to.equal("");
                expect(method("abcd", "e")).to.equal("");
            });
        });
    });
});