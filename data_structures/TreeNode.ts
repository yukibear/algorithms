export interface TreeNode<T> {
  val: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
}

type isLeft = boolean;

export function createTreeNode<T>(values: T[]): TreeNode<T> {
  const root: TreeNode<T> = createSingleNode(values[0])!;
  let queue: [TreeNode<T>, isLeft][] = [[root, true], [root, false]];

  for (let i = 1; i < values.length; i++) {
    const [node, isLeft] = queue.shift()!;
    const childNode = createSingleNode(values[i]);
    if (isLeft) {
      node.left = childNode;
    } else {
      node.right = childNode;
    }
    if (childNode) {
      queue.push([childNode, true], [childNode, false]);
    }
  }

  return root;
}

export const createSingleNode = <T>(value: T | null): TreeNode<T> | null => {
  return (value === null) ? null : { val: value, left: null, right: null };
};
