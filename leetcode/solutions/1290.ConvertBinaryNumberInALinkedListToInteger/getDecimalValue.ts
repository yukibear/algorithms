import { SinglyLinkedListNode as ListNode } from "../../../data_structures/SinglyLinkedListNode.ts";

export default function getDecimalValue(head: ListNode<number> | null): number {
  const nums: number[] = [];

  while (head) {
    nums.unshift(head.val);
    head = head.next;
  }

  let sum = 0;
  let x = 1;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] * x;
    x *= 2;
  }

  return sum;
}
