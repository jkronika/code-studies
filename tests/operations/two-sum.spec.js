/**jshint esversion: 6 */
/**global describe, it, expect */

let sinon = require("sinon");
let chai = require("chai");
let sinonChai = require("sinon-chai");
let twoSum = require("../../public/javascripts/operations/two-sum");

let expect = chai.expect;

chai.use(sinonChai);

describe("Two Sum", function() {
    Object.keys(twoSum.approaches).forEach(function(approach) {
        it("finds two distinct entries whose sum equals the target using " + approach, function() {
            let search = twoSum.approaches[approach];
            expect(search([3, 2, 4], 6)).to.eql([1, 2]);
            expect(search([0, 1, 2, 0], 0)).to.eql([0, 3])
        });
    });
})