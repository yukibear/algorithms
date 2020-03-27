import { BinaryTreeNode } from "../../../datastructure/BinaryTreeNode.ts";

export default function sortedArrayToBST(
  nums: number[]
): BinaryTreeNode<number> | null {
  if (nums.length === 0) {
    return null;
  }

  const half = Math.floor(nums.length / 2);
  const node: BinaryTreeNode<number> = {
    val: nums[half],
    left: null,
    right: null,
  };

  node.left = sortedArrayToBST(nums.slice(0, half));
  node.right = sortedArrayToBST(nums.slice(half + 1));

  return node;
}
