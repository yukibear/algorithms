import { SinglyLinkedListNode } from "../../../data_structures/SinglyLinkedListNode.ts";

export default function deleteDuplicates(
  head: SinglyLinkedListNode<number> | null
): SinglyLinkedListNode<number> | null {
  if (head === null) {
    return null;
  }

  let node: SinglyLinkedListNode<number> = { val: -1, next: null };
  const result = node;

  while (head) {
    if (head.val === head.next?.val) {
      head = head.next;

      continue;
    }

    node.next = { val: head.val, next: {val: -1, next: null } };
    node = node.next;
    head = head.next;
  }

  node.next = null;

  return result.next;
}
