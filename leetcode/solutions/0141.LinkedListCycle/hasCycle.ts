import { SinglyLinkedListNode } from "../../../data_structures/SinglyLinkedListNode.ts";
/**
 * @param {ListNode} head
 * @return {boolean}
 */
export default function hasCycle(
  node: SinglyLinkedListNode<number> | null,
): boolean {
  if (node == null) return false;

  const nodeSet = new Set();

  while (node.next) {
    node = node.next;

    if (nodeSet.has(node)) return true;

    nodeSet.add(node);
  }

  return false;
}
