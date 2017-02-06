let ListNode = require("../data-structures/ListNode");

function addTwoIterative(l1, l2) {
    let head = new ListNode(0);
    let p = l1;
    let q = l2;
    let current = head;
    let carry = 0;

    while (p !== null || q !== null) {
        let x = 0;
        let y = 0;

        if (p !== null) {
            x = p.val;
            p = p.next;
        }

        if (q !== null) {
            y = q.val;
            q = q.next;
        }

        let sum = carry + x + y;

        carry = parseInt(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return head.next;
}

function addTwoRecursive(l1, l2) {
    let current = new ListNode(0);

    // interestingly, adding the l1 and l2 values this way is faster
    // (or at least not significantly slower)
    // than adding them as the initial value to the ListNode constructor
    current.val += l1.val;
    current.val += l2.val;

    if (current.val >= 10) {
        l1.next = l1.next || new ListNode(0);
        l1.next.val += 1;
        current.val -= 10;
    }

    if (l1.next || l2.next) {
        current.next = addTwoRecursive(
            l1.next || new ListNode(0),
            l2.next || new ListNode(0));

        if (current.next && current.next.val === 0 && !current.next.next) {
            current.next = null;
        }
    }

    if (current.val >= 10) {
        if (!current.next) {
            current.next = new ListNode(0);
        }

        current.next.val += 1;
        current.val -= 10;
    }

    return current;
}

module.exports = {
    approaches: {
        iteration: addTwoIterative,
        recursion: addTwoRecursive
    }
}