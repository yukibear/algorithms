import { SinglyLinkedListNode } from "../../../datastructure/SinglyLinkedListNode.ts";

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
