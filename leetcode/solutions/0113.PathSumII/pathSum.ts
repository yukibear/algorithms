import { BinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

export default function pathSum(
  root: BinaryTreeNode<number>,
  sum: number
): number[][] {
  const result: number[][] = [];

  function dfs(
    root: BinaryTreeNode<number> | null,
    sum: number,
    path: number[]
  ) {
    if (!root) {
      return;
    }

    sum -= root.val;
    path.push(root.val);

    const { left, right } = root;

    if (!left && !right && sum === 0) {
      result.push([...path]);
    } else {
      dfs(root.left, sum, path);
      dfs(root.right, sum, path);
    }

    path.pop();
  }

  dfs(root, sum, []);

  return result;
}
