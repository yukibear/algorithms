import TreeNode from "../../../data_structures/TreeNode.ts";

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
export default function isBalanced(
  node?: TreeNode,
): boolean {
  if (node == null) return true;

  return Math.abs(depth(node.left) - depth(node.right)) <= 1
    && isBalanced(node.left) && isBalanced(node.right);
}

const depth = (node?: TreeNode): number => {
  if (node == null) return 0;

  return Math.max(depth(node.left), depth(node.right)) + 1;
}
