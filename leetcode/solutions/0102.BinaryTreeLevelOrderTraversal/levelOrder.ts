import { BinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

export function levelOrder_BFS(
  root: BinaryTreeNode<number>
): number[][] {
  const result: number[][] = [];
  const queue: [BinaryTreeNode<number> | null, number][] = [[root, 0]];

  while (queue.length > 0) {
    const [node, i] = queue.shift()!;

    if (!node) {
      continue;
    }

    if (!result[i]) {
      result[i] = [node.val];
    } else {
      result[i].push(node.val);
    }

    queue.push([node.left, i + 1], [node.right, i + 1]);
  }

  return result;
}

export function levelOrder_DFS(
  root: BinaryTreeNode<number>
): number[][] {
  const result: number[][] = [];

  function dfs(node: BinaryTreeNode<number> | null, i: number): void {
    if (!node) {
      return;
    }

    if (!result[i]) {
      result[i] = [node.val];
    } else {
      result[i].push(node.val);
    }

    dfs(node.left, i + 1);
    dfs(node.right, i + 1);
  }

  dfs(root, 0);

  return result;
}
