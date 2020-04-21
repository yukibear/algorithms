export interface BinaryTreeNode<T> {
  val: T;
  left: BinaryTreeNode<T> | null;
  right: BinaryTreeNode<T> | null;
}

type isLeft = boolean;

export function createBinaryTreeNode<T>(
  values: (T | null)[]
): BinaryTreeNode<T> | null {
  if (values.length === 0) return null;

  const root = createSingleNode(values[0]);
  let queue: [BinaryTreeNode<T>, isLeft][] = [
    [root!, true],
    [root!, false],
  ];

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

function createSingleNode<T>(value: T | null): BinaryTreeNode<T> | null {
  return value === null ? null : { val: value, left: null, right: null };
}
