import { SinglyLinkedListNode } from "../../../datastructure/SinglyLinkedListNode.ts";

export default function mergeTwoLists(
  l1: SinglyLinkedListNode<number> | null,
  l2: SinglyLinkedListNode<number> | null
): SinglyLinkedListNode<number> | null {
  const head: SinglyLinkedListNode<number> = { val: 0, next: null };
  let node = head;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      node.next = { val: l1.val, next: null };
      l1 = l1.next;
    } else {
      node.next = { val: l2.val, next: null };
      l2 = l2.next;
    }

    node = node.next;
  }

  l1 = l1 ? l1 : l2;

  while (l1) {
    node.next = { val: l1.val, next: null };
    node = node.next;
    l1 = l1.next;
  }

  return head.next;
}
