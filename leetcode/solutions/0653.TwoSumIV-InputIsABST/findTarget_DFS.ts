import { BinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

// DFS solution: O(n) Time and Space Complexity.
// This solution is to build a Set of TreeNode values
// checking if a difference(target - node.var) exists in the Set.
export default function findTarget(
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

  return findTarget(root.left, k, foundNums) ||
    findTarget(root.right, k, foundNums);
}
