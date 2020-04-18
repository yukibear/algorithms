import { BinaryTreeNode } from "../../../datastructure/BinaryTreeNode.ts";

export default function maxProduct(root: BinaryTreeNode<number>): number {
  const sums: number[] = [];

  function dfs(node: BinaryTreeNode<number> | null): number {
    if (!node) {
      return 0;
    }

    const sum = dfs(node.left) + dfs(node.right) + node.val;
    sums.push(sum);

    return sum;
  }

  dfs(root);

  let max = 0;
  let totalSum = sums.pop() || 0;

  for (const sum of sums) {
    max = Math.max(max, sum * (totalSum - sum));
  }

  return max % (Math.pow(10, 9) + 7);
}
