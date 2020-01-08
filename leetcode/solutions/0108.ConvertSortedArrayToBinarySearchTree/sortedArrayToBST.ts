import { BinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

export default function sortedArrayToBST(
  nums: number[]
): BinaryTreeNode<number> | null {
  if (nums.length === 0) {
    return null;
  }

  const pivotIndex = Math.floor(nums.length / 2);
  const node: BinaryTreeNode<number> = {
    val: nums[pivotIndex],
    left: null,
    right: null
  };

  node.left = sortedArrayToBST(nums.splice(0, pivotIndex));
  node.right = sortedArrayToBST(nums.splice(1));

  return node;
}
