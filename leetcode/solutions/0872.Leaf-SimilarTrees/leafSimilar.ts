import { TreeNode } from "../../../data_structures/TreeNode.ts";

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
export default function leafSimilar(
  root1: TreeNode<number> | null,
  root2: TreeNode<number> | null
): boolean {

  const dfs = (node: TreeNode<number> | null): number[] => {
    if (!node) return [];

    const { left, right } = node;
    if (!left && !right) {
      return [node.val];
    }

    return dfs(left).concat(dfs(right));
  }

  return JSON.stringify(dfs(root1)) === JSON.stringify(dfs(root2));
}
