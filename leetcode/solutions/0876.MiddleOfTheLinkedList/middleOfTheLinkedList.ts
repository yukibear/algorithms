import { SinglyLinkedListNode } from "../../../datastructure/SinglyLinkedListNode.ts";

export default function middleNode(
  p1: SinglyLinkedListNode<number> | null
): SinglyLinkedListNode<number> | null {
  if (!p1) {
    return p1;
  }

  let p2: SinglyLinkedListNode<number> | null = p1;

  while (p2?.next) {
    p1 = p1!.next;
    p2 = p2.next.next;
  }

  return p1;
}
