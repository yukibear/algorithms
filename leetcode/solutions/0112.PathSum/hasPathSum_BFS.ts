import { BinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

export default function hasPathSum(
  root: BinaryTreeNode<number> | null,
  sum: number
): boolean {
  if (!root) {
    return false;
  }

  const queue: [BinaryTreeNode<number> | null, number][] = [[root, sum]];

  while (queue.length > 0) {
    let [node, numberLeft] = queue.pop()!;

    if (!node) {
      continue;
    }

    numberLeft -= node.val;
    const { left, right } = node;

    if (numberLeft === 0 && !left && !right) {
      return true;
    }

    queue.push([node.left, numberLeft]);
    queue.push([node.right, numberLeft]);
  }

  return false;
}
