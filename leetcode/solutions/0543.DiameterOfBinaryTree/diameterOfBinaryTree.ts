import { BinaryTreeNode } from "../../../datastructure/BinaryTreeNode.ts";

export default function diameterOfBinaryTree(
  root: BinaryTreeNode<number> | null
): number {
  if (!root || (!root.left && !root.right)) {
    return 0;
  }

  const [maxLen, maxSum] = dfs(root);

  return Math.max(maxLen - 1, maxSum);
}

function dfs(node: BinaryTreeNode<number> | null): [number, number] {
  if (!node) {
    return [0, 0];
  }

  const [len1, sum1] = dfs(node.left);
  const [len2, sum2] = dfs(node.right);

  return [Math.max(len1, len2) + 1, Math.max(len1 + len2, sum1, sum2)];
}
