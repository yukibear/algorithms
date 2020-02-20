import { SinglyLinkedListNode } from "../../../data_structures/SinglyLinkedListNode.ts";

export default function swapPairs(
  head: SinglyLinkedListNode<number> | null
): SinglyLinkedListNode<number> | null {
  const result = head;

  while (head?.next) {
    const tmp = head.val;
    head.val = head.next.val;
    head.next.val = tmp;

    head = head.next.next;
  }

  return result;
}
