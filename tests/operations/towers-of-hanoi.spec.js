/**jshint esversion: 6 */
/**global describe, it, expect */

let chai = require("chai");
let tower = require("../../public/javascripts/operations/towers-of-hanoi");

let expect = chai.expect;

describe("Towers of Hanoi", function() {
    Object.keys(tower.approaches).forEach(function(approach) {
        describe("using " + approach, function() {
            let method = tower.approaches[approach];

            it("correctly processes a tower containing one item", function() {
                let start = {a: [1], b: [], c: []};
                let finish = {a: [], b: [1], c: []};
                expect(method(start, "a", "b")).to.eql(finish);
            });

            it("correctly processes a tower of three items", function() {
                let start = {a: [3, 2, 1], b: [], c: []};
                let finish = {a: [], b: [3, 2, 1], c: []};
                expect(method(start)).to.eql(finish);
            });

            it("correctly processes a tower of n items", function() {
                let list = [];
                let start = {a: [], b: [], c: []};
                let finish = {a: [], b: [], c: []};

                for (let i = 1, l = Math.ceil(Math.random()*20); i < l; i++) {
                    list.unshift(i++);
                }

                start.a = start.a.concat(list);
                finish.b = finish.b.concat(list);

                expect(method(start)).to.eql(finish);
            });
        });
    });
})