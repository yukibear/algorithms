import { BinaryTreeNode } from "../../../datastructure/BinaryTreeNode.ts";

export default function isSymmetric(
  root: BinaryTreeNode<number> | null
): boolean {
  if (root === null) {
    return true;
  }

  const leftValues = pushTreeVal(root.left, []);

  return checkTreeVal(root.right, leftValues);
}

function pushTreeVal(
  node: BinaryTreeNode<number> | null,
  leftValues: (number | null)[]
): (number | null)[] {
  if (!node) {
    leftValues.push(null);

    return leftValues;
  }

  leftValues.push(node.val);

  pushTreeVal(node.left, leftValues);
  pushTreeVal(node.right, leftValues);

  return leftValues;
}

function checkTreeVal(
  node: BinaryTreeNode<number> | null,
  values: (number | null)[]
): boolean {
  if (!node) {
    return values.shift() === null;
  }

  if (node.val !== values.shift()) {
    return false;
  }

  return checkTreeVal(node.right, values) && checkTreeVal(node.left, values);
}
