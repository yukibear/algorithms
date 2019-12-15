import { SinglyLinkedListNode } from "../../../data_structures/SinglyLinkedListNode.ts";

export default function hasCycle(
  node: SinglyLinkedListNode<number> | null,
): boolean {
  const nodeSet = new Set();

  while (node) {
    if (nodeSet.has(node)) return true;
    nodeSet.add(node);
    node = node.next;
  }

  return false;
}
