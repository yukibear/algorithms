import { TreeNode } from "../../data_structures/TreeNode.ts";

export function ConvertToTreeNode<T>(values: T[]): TreeNode<T> {

  const dfs = (i: number): TreeNode<T> | null => {
    if (values[i] == null) return null;

    const node: TreeNode<T> = {
      val: values[i],
      left: dfs(i + 1),
      right: dfs(i + 2),
    };

    return node;
  }

  return dfs(0);
};
