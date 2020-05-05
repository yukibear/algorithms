import { BinaryTreeNode } from "../../../datastructure/BinaryTreeNode.ts";
import { SinglyLinkedListNode } from "../../../datastructure/SinglyLinkedListNode.ts";

export default function sortedListToBST(
  head: SinglyLinkedListNode<number> | null
): BinaryTreeNode<number> | null {
  if (!head) {
    return null;
  }

  const nums: number[] = [];

  while (head) {
    nums.push(head.val);
    head = head.next;
  }

  return buildBst(nums, 0, nums.length - 1);
}

function buildBst(
  nums: number[],
  first: number,
  last: number
): BinaryTreeNode<number> | null {
  if (first > last) {
    return null;
  }

  const mid = (first + last) >> 1;
  const node: BinaryTreeNode<number> = {
    val: nums[mid],
    left: null,
    right: null,
  };
  node.left = buildBst(nums, first, mid - 1);
  node.right = buildBst(nums, mid + 1, last);

  return node;
}
