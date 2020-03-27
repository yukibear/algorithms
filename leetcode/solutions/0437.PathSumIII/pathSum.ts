import { BinaryTreeNode } from "../../../datastructure/BinaryTreeNode.ts";

export default function pathSum(
  root: BinaryTreeNode<number> | null,
  sum: number
): number {
  const nums: number[] = [];
  let count = 0;

  function dfs(node: BinaryTreeNode<number> | null) {
    if (!node) {
      return;
    }

    nums.push(node.val);
    let check = 0;

    for (let i = nums.length - 1; i >= 0; i--) {
      check += nums[i];

      if (check === sum) {
        count++;
      }
    }

    dfs(node.left);
    dfs(node.right);

    nums.pop();
  }

  dfs(root);

  return count;
}
