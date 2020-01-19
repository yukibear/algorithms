import { BinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

// Inorder array of numbers solution: O(n) Time and Space Complexity.
// This solution makes the array sorted in ascending order first,
// and then searchs a pair of numbers in it.
export default function findTarget(
  root: BinaryTreeNode<number> | null,
  k: number
): boolean {
  const nums: number[] = [];
  inorder(root, nums);

  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    const sum = nums[i] + nums[j];

    if (sum === k) {
      return true;
    }

    if (sum < k) {
      i++;
    } else {
      j--;
    }
  }

  return false;
}

function inorder(node: BinaryTreeNode<number> | null, nums: number[]) {
  if (!node) {
    return;
  }

  inorder(node.left, nums);
  nums.push(node.val);
  inorder(node.right, nums);
}
