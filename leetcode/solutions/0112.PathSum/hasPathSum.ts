export interface TreeNode {
  val: number;
  left?: TreeNode;
  right?: TreeNode;
}

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
export default function hasPathSum(node: TreeNode, sum: number): boolean {
  if (!node) return false;

  sum -= node.val;

  if (!node.left && !node.right) {
    return sum === 0;
  }

  return hasPathSum(node.left!, sum) || hasPathSum(node.right!, sum);
}
