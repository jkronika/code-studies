let ListNode = require("./ListNode")

function Queue() {
    this.first = null;
    this.last = null;
}

Queue.prototype.enqueue = function(value) {
    let item = new ListNode(value);
    if (!this.first) {
        this.first = this.last = item;
    } else {
        this.last.next = item;
        this.last = item;
    }
};

Queue.prototype.dequeue = function() {
    let first = this.first;
    if (first) {
        this.first = first.next;
    }
    return first;
};

Queue.prototype.isEmpty = function() {
    return !this.first;
};

module.exports = Queue;