import { BinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

export default function leafSimilar(
  root1: BinaryTreeNode<number> | null,
  root2: BinaryTreeNode<number> | null
): boolean {
  const dfs = (node: BinaryTreeNode<number> | null): number[] => {
    if (!node) return [];

    const { left, right } = node;
    if (!left && !right) {
      return [node.val];
    }

    return dfs(left).concat(dfs(right));
  };

  const leaves1 = dfs(root1);
  const leaves2 = dfs(root2);

  return (
    leaves1.length === leaves2.length &&
    leaves1.every((n, i) => n === leaves2[i])
  );
}
