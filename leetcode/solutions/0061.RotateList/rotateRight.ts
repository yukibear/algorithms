import { SinglyLinkedListNode } from "../../../datastructure/SinglyLinkedListNode.ts";

export default function rotateRight(head: SinglyLinkedListNode<number> | null, k: number): SinglyLinkedListNode<number> | null {
  if (k === 0 || head === null) {
    return head;
  }

  const ref: SinglyLinkedListNode<number>[] = [];
  let node: SinglyLinkedListNode<number> | null = head;

  while (node) {
    ref.push(node)
    node = node.next;
  }

  k %= ref.length;

  if (k === 0) {
    return head;
  }

  node = ref[ref.length - k]
  ref[ref.length - k - 1].next = null;
  ref[ref.length - 1].next = head;

  return node;
};
