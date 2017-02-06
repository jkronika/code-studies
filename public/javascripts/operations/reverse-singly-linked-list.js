let ListNode = require("../data-structures/ListNode")

function reverse(node, next) {
    let reversed = next;
    if (node) {
        reversed = new ListNode(node.val);
        if (next) {
            reversed.next = next;
        }
        reversed = reverse(node.next, reversed);
    }
    return reversed;
}

module.exports = {
    approaches: {
        "recursion": reverse
    }
};