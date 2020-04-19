import { BinaryTreeNode } from "../../../datastructure/BinaryTreeNode.ts";

export default function findSecondMinimumValue(
  root: BinaryTreeNode<number>
): number {
  let minVals = [Infinity, Infinity];

  function dfs(node: BinaryTreeNode<number> | null): void {
    if (!node) {
      return;
    }

    if (node.val < minVals[1] && node.val !== minVals[0]) {
      if (node.val < minVals[0]) {
        minVals[1] = minVals[0];
        minVals[0] = node.val;
      } else {
        minVals[1] = node.val;
      }
    }

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  return minVals[1] !== Infinity ? minVals[1] : -1;
}
