import { BinaryTreeNode } from "../../../datastructure/BinaryTreeNode.ts";

export default function postorderTraversal(
  root: BinaryTreeNode<number> | null
): number[] {
  const nums: number[] = [];
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();

    if (!node) {
      continue;
    }

    nums.unshift(node.val);
    stack.push(node.left);
    stack.push(node.right);
  }

  return nums;
}
