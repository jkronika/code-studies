/**jshint esversion: 6 */
/**global describe, it, expect */

let chai = require("chai");
let Queue = require("../../public/javascripts/data-structures/Queue");

let expect = chai.expect;

describe("Queue", function() {
    it("can be instantiated", function() {
        let queue = new Queue();
        expect(queue).to.be.an.instanceof(Queue);
        expect(queue.first).to.be.null;
    });

    it("instantiates as initially empty", function() {
        let queue = new Queue();
        expect(queue.isEmpty()).to.be.true;
    });

    it("can identify when it is non-empty", function() {
        let queue = new Queue();
        queue.enqueue(0);
        expect(queue.isEmpty()).to.be.false;
    })

    it("can have values added", function() {
        let queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.first.val).to.equal(1);
        expect(queue.first.next.val).to.equal(2);
    });

    it("can have values removed in the order they were added", function() {
        let queue = new Queue();
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);

        let first3 = queue.dequeue();
        expect(first3.val).to.equal(3);
        expect(queue.isEmpty()).to.be.false;
        expect(queue.first.val).to.equal(4);

        let first4 = queue.dequeue();
        expect(first4.val).to.equal(4);

        let first5 = queue.dequeue();
        expect(first5.val).to.equal(5);
        expect(first5.next).to.be.null;

        expect(queue.isEmpty()).to.be.true;
    });
});