import { BinaryTreeNode } from "../../../datastructure/BinaryTreeNode.ts";

export default function mergeTrees(
  t1: BinaryTreeNode<number> | null,
  t2: BinaryTreeNode<number> | null
): BinaryTreeNode<number> | null {
  if (t1 === null) {
    return t2;
  }

  const root = t1;

  function dfs(
    t1: BinaryTreeNode<number>,
    t2: BinaryTreeNode<number> | null
  ): void {
    if (!t2) {
      return;
    }

    t1.val += t2.val;

    const { left: l1, right: r1 } = t1;
    const { left: l2, right: r2 } = t2;

    if (l1) {
      dfs(l1, l2);
    } else {
      t1.left = l2;
    }

    if (r1) {
      dfs(r1, r2);
    } else {
      t1.right = r2;
    }
  }

  dfs(t1, t2);

  return root;
}
