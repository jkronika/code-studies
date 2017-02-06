/**jshint esversion: 6 */
/**global describe, it, expect */

let chai = require("chai");
let LinkedList = require("../../public/javascripts/data-structures/LinkedList");
let addTwo = require("../../public/javascripts/operations/add-two-linkedlist-nums");

let expect = chai.expect;

describe("Addition of Two LinkedList Numbers", function() {
    Object.keys(addTwo.approaches).forEach(function(approach) {
        describe("using " + approach, function() {
            let method = addTwo.approaches[approach];

            it("adds single nodes", function() {
                expect(method(new LinkedList(3), new LinkedList(4))).to.eql(new LinkedList(7));
            });

            it("adds zeros to result in zero", function() {
                let zero = new LinkedList(0);
                expect(method(zero, zero)).to.eql(zero);
            });

            it("can carry tens in the middle of the number correctly", function() {
                let l1 = new LinkedList(2);
                l1.next = new LinkedList(4);
                l1.next.next = new LinkedList(3);

                let l2 = new LinkedList(5);
                l2.next = new LinkedList(6);
                l2.next.next = new LinkedList(4);

                let expected = new LinkedList(7);
                expected.next = new LinkedList(0);
                expected.next.next = new LinkedList(8);

                expect(method(l1, l2)).to.eql(expected);
            });

            it("can carry tens in the terminal node correctly", function() {
                let five1 = new LinkedList(5);
                let five2 = new LinkedList(5);
                let ten = new LinkedList(0);
                ten.next = new LinkedList(1);

                expect(method(five1, five2)).to.eql(ten);
            });

            it("can add large numbers to zero", function() {
                let large = new LinkedList(9);
                large.next = new LinkedList(1);
                large.next.next = new LinkedList(6);

                let zero = new LinkedList(0);

                expect(method(large, zero)).to.eql(large);
            });
        });
    });
});