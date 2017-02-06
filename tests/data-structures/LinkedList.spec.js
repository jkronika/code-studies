/**jshint esversion: 6 */
/**global describe, it, expect */

let chai = require("chai");
let LinkedList = require("../../public/javascripts/data-structures/LinkedList");

let expect = chai.expect;

describe("Linked List", function() {
    it("can be instantiated", function() {
        let list = new LinkedList(1);
        expect(list).to.be.an.instanceof(LinkedList);
        expect(list.val).to.equal(1);
    });

    it("has a null pointer as the next item by default", function() {
        let list = new LinkedList(2);
        expect(list.next).to.be.null;
    });

    it("can point to another list as the next item", function() {
        let list = new LinkedList(3);
        list.next = new LinkedList(4);
        expect(list.next).to.be.an.instanceof(LinkedList);
        expect(list.next.val).to.equal(4);
    });
});