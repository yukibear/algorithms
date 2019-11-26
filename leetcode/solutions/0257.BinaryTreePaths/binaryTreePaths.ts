import { TreeNode } from '../../../data_structures/TreeNode.ts';

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
export default function binaryTreePaths(
  root: TreeNode<number> | null
): string[] {

  let returnArr: string[] = [];

  const dfs = (node: TreeNode<number> | null, str: string) => {
    if (!node) return;

    str = (str) ? str + "->" + node.val : "" + node.val;

    if (!node.left && !node.right) {
      returnArr.push(str);
      return;
    }
    dfs(node.left, str);
    dfs(node.right, str);
  }

  dfs(root, "");

  return returnArr;
}
