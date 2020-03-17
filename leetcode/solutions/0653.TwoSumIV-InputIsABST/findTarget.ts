import { BinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

// DFS solution: O(n) Time and Space Complexity.
// This solution is to build a Set of TreeNode values
// checking if a difference(target - node.var) exists in the Set.
export function findTarget_DFS(
  root: BinaryTreeNode<number> | null,
  k: number,
  foundNums = new Set<number>()
): boolean {
  if (!root) {
    return false;
  }
  if (foundNums.has(k - root.val)) {
    return true;
  }

  foundNums.add(root.val);

  return findTarget_DFS(root.left, k, foundNums) ||
    findTarget_DFS(root.right, k, foundNums);
}

// Inorder array of numbers solution: O(n) Time and Space Complexity.
// This solution makes the array sorted in ascending order first,
// and then searchs a pair of numbers in it.
export function findTarget_SortedArray(
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
