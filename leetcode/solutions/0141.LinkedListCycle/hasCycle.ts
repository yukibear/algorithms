import { SinglyLinkedListNode } from "../../../data_structures/SinglyLinkedListNode.ts";

export default function hasCycle(
  node: SinglyLinkedListNode<number> | null,
): boolean {
  let walker = node;
  let runner = node;

  while (walker && runner?.next) {
    walker = walker.next;
    runner = runner.next.next;

    if (walker === runner) {
      return true;
    }
  }

  return false;
}
