import { SinglyLinkedListNode } from "../../../data_structures/SinglyLinkedListNode.ts";

export default function addTwoNumbers(
  l1: SinglyLinkedListNode<number> | null,
  l2: SinglyLinkedListNode<number> | null
): SinglyLinkedListNode<number> | null {
  let head: SinglyLinkedListNode<number> = { val: 0, next: null };
  let cursor = head;
  let rest = 0;

  while (l1 || l2 || rest > 0) {
    let val = rest;

    if (l1) {
      val += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      val += l2.val;
      l2 = l2.next;
    }

    rest = Math.floor(val / 10);
    val = val % 10;

    cursor.next = { val, next: null };
    cursor = cursor.next;
  }

  return head.next;
}
