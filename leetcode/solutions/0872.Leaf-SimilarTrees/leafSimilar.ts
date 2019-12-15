import { TreeNode } from "../../../data_structures/TreeNode.ts";

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

  const leaves1 = dfs(root1);
  const leaves2 = dfs(root2);

  return leaves1.length === leaves2.length
    && leaves1.every((n, i) => n === leaves2[i]);
}
