import { BinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

// Inorder array of numbers solution
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

// DFS solution where building a Set of TreeNode values
// and checking if a difference(target - node.var) exists in the Set.
export function findTarget_DFS(
  root: BinaryTreeNode<number> | null,
  k: number
): boolean {
  return dfs(root, new Set<number>(), k);
}

function dfs(
  node: BinaryTreeNode<number> | null,
  foundNums: Set<number>,
  k: number
): boolean {
  if (!node) {
    return false;
  }
  if (foundNums.has(k - node.val)) {
    return true;
  }

  foundNums.add(node.val);

  return dfs(node.left, foundNums, k) || dfs(node.right, foundNums, k);
}
