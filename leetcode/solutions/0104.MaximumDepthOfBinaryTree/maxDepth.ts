import { BinaryTreeNode } from "../../../datastructure/BinaryTreeNode.ts";

export default function maxDepth(root: BinaryTreeNode<number>): number {
  function dfs(node: BinaryTreeNode<number> | null, depth: number): number {
    if (!node) {
      return depth;
    }

    depth++;

    return Math.max(dfs(node.left, depth), dfs(node.right, depth));
  }

  return dfs(root, 0);
}
