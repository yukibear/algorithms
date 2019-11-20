import { SinglyLinkedListNode } from "../../../data_structures/SinglyLinkedListNode.ts";

/**
 * @param {SinglyLinkedListNode} node
 * @return {SinglyLinkedListNode}
 */
export default function detectCycle(
  node: SinglyLinkedListNode<number> | null
): SinglyLinkedListNode<number> | null {
  const nodeSet = new Set();

  while (node && !nodeSet.has(node)) {
    nodeSet.add(node);
    node = node.next;
  }

  return node;
}
