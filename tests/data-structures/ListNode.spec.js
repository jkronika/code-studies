/**jshint esversion: 6 */
/**global describe, it, expect */

let chai = require("chai");
let ListNode = require("../../public/javascripts/data-structures/ListNode");

let expect = chai.expect;

describe("Linked List Node", function() {
    it("can be instantiated", function() {
        let list = new ListNode(1);
        expect(list).to.be.an.instanceof(ListNode);
        expect(list.val).to.equal(1);
    });

    it("has a null pointer as the next item by default", function() {
        let list = new ListNode(2);
        expect(list.next).to.be.null;
    });

    it("can point to another list as the next item", function() {
        let list = new ListNode(3);
        list.next = new ListNode(4);
        expect(list.next).to.be.an.instanceof(ListNode);
        expect(list.next.val).to.equal(4);
    });
});