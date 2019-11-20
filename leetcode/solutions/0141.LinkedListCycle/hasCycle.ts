import { SinglyLinkedListNode } from "../../../data_structures/SinglyLinkedListNode.ts";

/**
 * @param {SinglyLinkedListNode} head
 * @return {boolean}
 */
export default function hasCycle(
  node: SinglyLinkedListNode<number> | null,
): boolean {
  const nodeSet = new Set();

  while (node) {
    nodeSet.add(node);
    node = node.next;
    if (nodeSet.has(node)) return true;
  }

  return false;
}
