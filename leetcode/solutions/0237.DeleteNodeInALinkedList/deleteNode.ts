import { SinglyLinkedListNode } from "../../../datastructure/SinglyLinkedListNode.ts";

export default function deleteNode(node: SinglyLinkedListNode<number>): void {
  node.val = node.next!.val;
  node.next = node.next!.next;
}
