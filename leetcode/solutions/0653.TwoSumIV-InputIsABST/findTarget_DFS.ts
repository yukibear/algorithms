import { BinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

// DFS solution: O(n) Time and Space Complexity.
// This solution is to build a Set of TreeNode values
// checking if a difference(target - node.var) exists in the Set.
export default function findTarget(
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
