import { SinglyLinkedListNode } from "../../../data_structures/SinglyLinkedListNode.ts";

export default function mergeTwoLists(
  l1: SinglyLinkedListNode<number> | null,
  l2: SinglyLinkedListNode<number> | null
): SinglyLinkedListNode<number> | null {
  let arr = [];

  while (l1) {
    arr.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    arr.push(l2.val);
    l2 = l2.next;
  }

  const head: SinglyLinkedListNode<number> = { val: 0, next: null };
  let node = head;

  arr.sort((a, b) => a - b).forEach(val => {
    node.next = { val, next: null };
    node = node.next;
  });

  return head.next;
}
