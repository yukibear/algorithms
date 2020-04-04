import { SinglyLinkedListNode } from "../../../datastructure/SinglyLinkedListNode.ts";

export default function isPalindrome(
  head: SinglyLinkedListNode<number> | null
): boolean {
  const nums: number[] = [];

  while (head) {
    nums.push(head.val);
    head = head.next;
  }

  for (let i = 0, j = nums.length - 1; i < j; i++, j--) {
    if (nums[i] !== nums[j]) {
      return false;
    }
  }

  return true;
}
