import { SinglyLinkedListNode } from "../../../data_structures/SinglyLinkedListNode.ts";
/**
 * @param {ListNode} head
 * @return {boolean}
 */
export default function hasCycle(
  node: SinglyLinkedListNode<number> | null,
): boolean {
  if (node == null) return false;

  const head = node;
  let i = 0;

  while (node.next) {
    node = node.next;

    let j = i;
    let check = head;
    while (j >= 0) {
      if (node === check) return true;
      check = check.next!;
      j -= 1;
    }

    i += 1;
  }

  return false;
}
