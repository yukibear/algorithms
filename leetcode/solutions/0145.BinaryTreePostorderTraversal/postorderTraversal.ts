import { BinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

export default function postorderTraversal(
  root: BinaryTreeNode<number> | null
): number[] {
  const nums: number[] = [];

  function dfs(node: BinaryTreeNode<number> | null): void {
    if (!node) {
      return;
    }

    dfs(node.left);
    dfs(node.right);

    nums.push(node.val);
  }

  dfs(root);

  return nums;
}
