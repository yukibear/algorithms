import { BinaryTreeNode } from "../../../datastructure/BinaryTreeNode.ts";

export default function binaryTreePaths(
  root: BinaryTreeNode<number> | null
): string[] {
  let returnArr: string[] = [];

  const dfs = (node: BinaryTreeNode<number> | null, str: string) => {
    if (!node) return;

    str = str ? str + "->" + node.val : "" + node.val;

    if (!node.left && !node.right) {
      returnArr.push(str);
      return;
    }
    dfs(node.left, str);
    dfs(node.right, str);
  };

  dfs(root, "");

  return returnArr;
}
