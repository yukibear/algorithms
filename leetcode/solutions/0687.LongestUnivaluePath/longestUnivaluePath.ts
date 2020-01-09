import { BinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

export default function longestUnivaluePath(
  root: BinaryTreeNode<number> | null
): number {
  const numCountMap = new Map<number, number>([[0, 0]]);

  dfs(root, numCountMap);

  return Math.max(...numCountMap.values());
}

function dfs(
  node: BinaryTreeNode<number> | null,
  numCountMap: Map<number, number>
): number {
  if (!node) {
    return 0;
  }

  const { left, right } = node;
  let leftLen = dfs(left, numCountMap);
  let rightLen = dfs(right, numCountMap);

  if (left && right && left.val === right.val) {
    if (left.val === node.val) {
      leftLen++;
      rightLen++;
      numCountMap.set(
        left.val,
        Math.max(leftLen + rightLen, numCountMap.get(left.val) || 0)
      );

      return Math.max(leftLen, rightLen);
    }

    return 0;
  }

  if (left && left.val === node.val) {
    leftLen++;
    numCountMap.set(
      left.val,
      Math.max(leftLen, numCountMap.get(left.val) || 0)
    );

    return leftLen;
  }

  if (right && right.val === node.val) {
    rightLen++;
    numCountMap.set(
      right.val,
      Math.max(rightLen, numCountMap.get(right.val) || 0)
    );

    return rightLen;
  }

  return 0;
}
