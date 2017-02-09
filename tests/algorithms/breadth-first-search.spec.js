/**jshint esversion: 6 */
/**global describe, it, expect */

let chai = require("chai");
let search = require("../../public/javascripts/algorithms/breadth-first-search");

let expect = chai.expect;

describe("Breadth-first Search", function() {
    let graph;

    beforeEach(function() {
        graph = [
            /*0*/ [1],
            /*1*/ [0, 4, 5],
            /*2*/ [3, 4, 5],
            /*3*/ [2, 6],
            /*4*/ [1, 2],
            /*5*/ [1, 2, 6],
            /*6*/ [3, 5],
            /*7*/ []
        ];
    });

    Object.keys(search.approaches).forEach(function(approach) {
        describe("using " + approach, function() {
            let method = search.approaches[approach];

            it("", function() {
                let source = 3;
                let target = 1;
                let result = method(graph, source);

                expect(result[target].distance).to.equal(3);
                expect(result[target].predecessor).to.equal(4);

                expect(result[4].distance).to.equal(2);
                expect(result[4].predecessor).to.equal(2);

                expect(result[2].distance).to.equal(1);
                expect(result[2].predecessor).to.equal(source);

                expect(result[source].distance).to.equal(0);
                expect(result[source].predecessor).to.equal(null);

                expect(result[source].distance).to.equal(0);
                expect(result[source].predecessor).to.be.null;
            });
        });
    });
});