/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) {
        return null;
    }

    let curA = headA;
    let curB = headB;

    while (curA !== curB) {
        if (curA.next) {//カーソルAあれば進める
            curA = curA.next;
        } else {
            if (!curB.next) {
                curA = null;
                curB = null;
                break;
            }
            curA = headB;
        }
        if (curB.next) {
            curB = curB.next
        } else {
            // switch tracks to even out uneven length
            curB = headA;
        }
    }

    return curB;
};


var getIntersectionNode = function (headA, headB) {
    let arrA = [headA.val];
    let curA = headA;
    while (curA = curA.next) {
        arrA.push(curA.val);
    }
    let answer = curB = headB;
    let i = 0;
    while (curB = curB.next) {
        if (curB.value !== arrA[i]) {
            i = 0;
            answer = null;
            continue;
        } else if (!answer) {
            answer = curB;
        }
        i++;
    }
    if (answer && typeof arrA[i] !== 'undefined') return null;
    return answer;
}

var getIntersectionNode = function (headA, headB) {
    let arrA = [headA.val];
    let curA = headA;
    while (curA = curA.next) {
        arrA.push(curA.val);
    }
    let answer = curB = headB;
    let i = 0;
    while (curB = curB.next) {
        if (curB.val !== arrA[i]) {
            i = 0;
            answer = null;
            continue;
        } else if (!answer) {
            answer = curB;
        }
        i++;
    }
    if (answer && typeof arrA[i] !== 'undefined') return null;
    return answer;
}

let getIntersectionNode = function (headA, headB) {
    let  cursolA = headA;
    let  cursolB = headB;
    while (cursolA = cursolA.next) {
        if (cursolA === cursolB) return cursolA;
    }
    while (cursolB = cursolB.next) {
        if (cursolB.value !== arrA[i]) {
            i = 0;
            answer = null;
            continue;
        } else if (!answer) {
            answer = cursolB;
        }
        i++;
    }
    if (answer && typeof arrA[i] !== 'undefined') return null;
    return answer;
}

let getIntersectionNode = function (headA, headB) {
    let  cursolA = headA;
    let  cursolB = headB;
    while (cursolA = cursolA.next) {
        if (cursolA === cursolB) return cursolA;
    }
    while (cursolB = cursolB.next) {
        if (cursolB.value !== arrA[i]) {
            i = 0;
            answer = null;
            continue;
        } else if (!answer) {
            answer = cursolB;
        }
        i++;
    }
    if (answer && typeof arrA[i] !== 'undefined') return null;
    return answer;
}

/**
 * きれいな回答
 * @param {*} headA
 * @param {*} headB
 */
function(headA, headB) {
    let a = headA;
    let b = headB;
    while (a !== b) {
        a = a === null ? headB : a.next;
        b = b === null ? headA : b.next;
    }
    return a;
}

function(headA, headB) {
    let a = headA;
    let b = headB;
    while (a !== b) {
        a = a === null ? headB : a.next;
        b = b === null ? headA : b.next;
    }
    return a;
}


console.log(getIntersectionNode([4,1,8,4,5], [5,,1,8,4,5]));
