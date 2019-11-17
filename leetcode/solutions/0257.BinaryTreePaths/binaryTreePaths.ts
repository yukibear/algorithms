import TreeNode from '../../../data_structures/TreeNode.ts';

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
export default function binaryTreePaths(
  root: TreeNode
): string[] {

  let returnArr = [];

  const dfs = (node: TreeNode, str: string) => {
    if (!node) return;

    str = (str) ? str + "->" + node.val : "" + node.val;

    if (!node.left && !node.right) {
      returnArr.push(str);
      return;
    }
    dfs(node.left, str);
    dfs(node.right, str);
  }

  dfs(root, null);

  return returnArr;
}
