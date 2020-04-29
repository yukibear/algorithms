import { BinaryTreeNode } from "../../../datastructure/BinaryTreeNode.ts";

export default function maxPathSum(root: BinaryTreeNode<number>): number {
  let best = root.val;

  function dfs(node: BinaryTreeNode<number> | null): number {
    if (!node) {
      return 0;
    }

    const left = Math.max(0, dfs(node.left));
    const right = Math.max(0, dfs(node.right));
    const total = node.val + left + right;

    if (total > best) {
      best = total;
    }

    return node.val + Math.max(left, right);
  }

  dfs(root);

  return best;
}
