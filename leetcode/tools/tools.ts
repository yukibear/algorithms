import { TreeNode } from "../../data_structures/TreeNode.ts";

type isLeftNode = boolean;

export function ConvertArrayToTreeNode<T>(values: T[]): TreeNode<T> {
  const root: TreeNode<T> = { val: values.pop()!, left: null, right: null };
  let queue: [TreeNode<T>, isLeftNode][] = [[root, true], [root, false]];

  let value: T;
  while ((value = values.pop()!) !== undefined) {
    const [node, isLeftNode] = queue.shift()!;

    const childNode = (value == null) ? null : { val: value, left: null, right: null };
    if (isLeftNode) {
      node.left = childNode;
    } else {
      node.right = childNode;
    }
    if (childNode !== null) {
      queue.push([childNode, true], [childNode, false]);
    }
  }

  return root;
};
