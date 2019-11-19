import { SinglyLinkedListNode } from "../../../data_structures/SinglyLinkedListNode.ts";
/**
 * @param {ListNode} head
 * @return {boolean}
 */
export default function hasCycle(
  node: SinglyLinkedListNode<number> | null,
): boolean {
  if (node == null) return false;

  const nodes = [node];

  while (node.next) {
    node = node.next;
    for (let check of nodes) {
      if (node === check) return true;
    }

    nodes.push(node);
  }

  return false;
}
