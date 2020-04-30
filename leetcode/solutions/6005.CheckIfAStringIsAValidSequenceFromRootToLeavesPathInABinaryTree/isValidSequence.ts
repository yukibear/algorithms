import { BinaryTreeNode } from "../../../datastructure/BinaryTreeNode.ts";

export default function isValidSequence(
  root: BinaryTreeNode<number> | null,
  arr: number[],
  i: number = 0
): boolean {
  if (i === arr.length || root?.val !== arr[i]) {
    return false;
  }

  const { left, right } = root;

  if (!left && !right) {
    return i === arr.length - 1;
  }

  i++;

  return isValidSequence(left, arr, i) || isValidSequence(right, arr, i);
}
