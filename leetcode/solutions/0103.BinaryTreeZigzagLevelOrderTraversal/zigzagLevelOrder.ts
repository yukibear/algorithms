import { BinaryTreeNode } from "../../../datastructure/BinaryTreeNode.ts";

export default function zigzagLevelOrder(
  root: BinaryTreeNode<number> | null
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
    } else if (i % 2 === 1) {
      result[i].unshift(node.val);
    } else {
      result[i].push(node.val);
    }

    queue.push([node.left, i + 1], [node.right, i + 1]);
  }

  return result;
}
