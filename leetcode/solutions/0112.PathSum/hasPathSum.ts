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
export default function hasPathSum(
  root: TreeNode,
  sum: number
): boolean {
  if (!root) return false;

  const dfs = (node: TreeNode, num: number): boolean => {
    if (!node.left && !node.right) {
      if (num === 0) return true;
      return false;
    }

    if (node.left) {
      let leftSum = num - node.left.val;
      if (dfs(node.left, leftSum) === true) return true
    }
    if (node.right) {
      let rightSum = num - node.right.val;
      return dfs(node.right, rightSum);
    }
    return false;
  }

  return dfs(root, sum - root.val);
}
