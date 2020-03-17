import { SinglyLinkedListNode } from "../../../data_structures/SinglyLinkedListNode.ts";

export default function reverseList(
  head: SinglyLinkedListNode<number> | null
): SinglyLinkedListNode<number> | null {
  if (head === null) {
    return null;
  }

  let prevNode: SinglyLinkedListNode<number> = { val: head.val, next: null };
  head = head.next;

  while (head) {
    const node = { val: head.val, next: prevNode };
    prevNode = node;
    head = head.next;
  }

  return prevNode;
}
