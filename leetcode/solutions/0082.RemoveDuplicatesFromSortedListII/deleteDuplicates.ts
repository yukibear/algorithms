import { SinglyLinkedListNode } from "../../../data_structures/SinglyLinkedListNode.ts";

export default function deleteDuplicates(
  head: SinglyLinkedListNode<number> | null
): SinglyLinkedListNode<number> | null {
  let prev: SinglyLinkedListNode<number>;

  // advance the head pointer to non-duplicated value
  while (head && (head.val === prev?.val || head.val === head.next?.val)) {
    prev = head;
    head = head.next;
  }

  if (head == null) {
    return null;
  }

  let p1 = head;
  let p2 = head.next;
  prev = head;

  while (p2) {
    if (p2.val === prev.val || p2.val === p2.next?.val) {
      prev = p2;
      p2 = p2.next;

      continue;
    }

    p1.next = p2;
    p1 = p1.next;
    p2 = p2.next;
  }

  p1.next = null;

  return head;
}
