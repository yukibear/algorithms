import { BinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

export default function longestUnivaluePath(
  root: BinaryTreeNode<number> | null
): number {
  // Using an array as just a refference of one maximum result to make code simpl.
  // Thus its length is always 1.
  const max: [number] = [0];

  dfs(root, max);

  return max[0];
}

function dfs(node: BinaryTreeNode<number> | null, max: [number]): number {
  if (!node) {
    return 0;
  }

  const { left, right } = node;

  let leftLen = dfs(left, max);
  let rightLen = dfs(right, max);

  leftLen = left && left.val === node.val ? leftLen + 1 : 0;
  rightLen = right && right.val === node.val ? rightLen + 1 : 0;

  max[0] = Math.max(max[0], leftLen + rightLen);

  return Math.max(leftLen, rightLen);
}
