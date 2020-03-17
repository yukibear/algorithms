import { BinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

export function hasPathSum_DFS(
  node: BinaryTreeNode<number> | null,
  sum: number
): boolean {
  if (!node) return false;

  sum -= node.val;

  if (!node.left && !node.right) {
    return sum === 0;
  }

  return hasPathSum_DFS(node.left!, sum) || hasPathSum_DFS(node.right!, sum);
}

export function hasPathSum_BFS(
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
