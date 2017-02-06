/**jshint esversion: 6 */
/**global describe, it, expect */

let chai = require("chai");
let reverse = require("../../public/javascripts/operations/reverse-singly-linked-list");
let ListNode = require("../../public/javascripts/data-structures/ListNode")

let expect = chai.expect;

describe("Reverse a Singly-Linked List", function() {
    Object.keys(reverse.approaches).forEach(function(approach) {
        describe("using " + approach, function() {
            let method = reverse.approaches[approach];

            it("returns a list with one node unchanged", function() {
                let single = new ListNode(0);
                expect(method(single)).to.eql(single);
            });

            it("can reverse the link order without changing the original nodes", function() {
                let original = new ListNode(1);
                original.next = new ListNode(2);

                let unchanged = new ListNode(1);
                unchanged.next = new ListNode(2);

                let reversed = new ListNode(2);
                reversed.next = new ListNode(1);

                expect(method(original)).to.eql(reversed);
                expect(original).to.eql(unchanged);
            });

            it("can reverse long link chains", function() {
                let original = new ListNode(3);
                original.next = new ListNode(4);
                original.next.next = new ListNode(5);
                original.next.next.next = new ListNode(6);

                let reversed = new ListNode(6);
                reversed.next = new ListNode(5);
                reversed.next.next = new ListNode(4);
                reversed.next.next.next = new ListNode(3);

                expect(method(original)).to.eql(reversed);
            });
        });
    });
});