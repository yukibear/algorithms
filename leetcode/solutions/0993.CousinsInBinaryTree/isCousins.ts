import { BinaryTreeNode } from "../../../datastructure/BinaryTreeNode.ts";

export default function isCousins(
  root: BinaryTreeNode<number> | null,
  x: number,
  y: number
): boolean {
  if (!root) {
    return false;
  }

  interface queueData {
    depth: number;
    parentVal: number;
    node: BinaryTreeNode<number> | null;
  }

  const queue: queueData[] = [
    { depth: 1, parentVal: root.val, node: root.left },
    { depth: 1, parentVal: root.val, node: root.right },
  ];

  interface seekData {
    depth: number;
    val: number;
    ignoreParentVal: number;
  }
  let seeking: seekData = { depth: 0, val: root.val, ignoreParentVal: 0 };

  while (queue.length > 0) {
    let { depth, parentVal, node } = queue.shift()!;

    if (!node) {
      continue;
    }
    if (node.val == seeking.val) {
      return depth === seeking.depth && parentVal !== seeking.ignoreParentVal;
    }

    if (node.val === x) {
      seeking = { depth, val: y, ignoreParentVal: parentVal };
    } else if (node.val === y) {
      seeking = { depth, val: x, ignoreParentVal: parentVal };
    } else {
      depth++;
      queue.push({ depth: depth, parentVal: node.val, node: node.left });
      queue.push({ depth: depth, parentVal: node.val, node: node.right });
    }
  }

  return false;
}
