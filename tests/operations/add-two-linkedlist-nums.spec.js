/**jshint esversion: 6 */
/**global describe, it, expect */

let chai = require("chai");
let ListNode = require("../../public/javascripts/data-structures/ListNode");
let addTwo = require("../../public/javascripts/operations/add-two-linkedlist-nums");

let expect = chai.expect;

describe("Addition of Two LinkedList Numbers", function() {
    Object.keys(addTwo.approaches).forEach(function(approach) {
        describe("using " + approach, function() {
            let method = addTwo.approaches[approach];

            it("adds single nodes", function() {
                expect(method(new ListNode(3), new ListNode(4))).to.eql(new ListNode(7));
            });

            it("adds zeros to result in zero", function() {
                let zero = new ListNode(0);
                expect(method(zero, zero)).to.eql(zero);
            });

            it("can carry tens in the middle of the number correctly", function() {
                let l1 = new ListNode(2);
                l1.next = new ListNode(4);
                l1.next.next = new ListNode(3);

                let l2 = new ListNode(5);
                l2.next = new ListNode(6);
                l2.next.next = new ListNode(4);

                let expected = new ListNode(7);
                expected.next = new ListNode(0);
                expected.next.next = new ListNode(8);

                expect(method(l1, l2)).to.eql(expected);
            });

            it("can carry tens in the terminal node correctly", function() {
                let five1 = new ListNode(5);
                let five2 = new ListNode(5);
                let ten = new ListNode(0);
                ten.next = new ListNode(1);

                expect(method(five1, five2)).to.eql(ten);
            });

            it("can add large numbers to zero", function() {
                let large = new ListNode(9);
                large.next = new ListNode(1);
                large.next.next = new ListNode(6);

                let zero = new ListNode(0);

                expect(method(large, zero)).to.eql(large);
            });
        });
    });
});