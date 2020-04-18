import { SinglyLinkedListNode } from "../../../datastructure/SinglyLinkedListNode.ts";

export default function addTwoNumbers(
  l1: SinglyLinkedListNode<number> | null,
  l2: SinglyLinkedListNode<number> | null
): SinglyLinkedListNode<number> | null {
  const head: SinglyLinkedListNode<number> = { val: 0, next: null };
  let cursor = head;
  let rest = 0;

  while (l1 || l2 || rest > 0) {
    let sum = rest;
    rest = 0;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    if (sum >= 10) {
      rest = 1;
      sum = sum - 10;
    }

    cursor.next = { val: sum, next: null };
    cursor = cursor.next;
  }

  return head.next;
}
