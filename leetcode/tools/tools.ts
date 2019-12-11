import { TreeNode } from "../../data_structures/TreeNode.ts";

export function StringArrayToTreeNode<T>(values: T[]): TreeNode<T> {

  const dfs = (i: number, depth: number): TreeNode<T> | null => {
    if (values[i] == null) return null;

    const node: TreeNode<T> = { val: values[i], left: null, right: null };
    const nextDepth = depth + 1;
    depth += 1;

    node.left = dfs(nextIndex, depth);
    node.right = dfs(nextIndex + 1, depth);

    return node;
  }

  return dfs(0, 1);
};
