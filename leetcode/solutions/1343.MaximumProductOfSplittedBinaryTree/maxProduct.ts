import { BinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

export default function maxProduct(root: BinaryTreeNode<number>): number {
  const nums: number[] = [];
  let sum = 0;

  function dfs(node: BinaryTreeNode<number> | null): number {
    if (!node) {
      return 0;
    }

    sum += node.val;

    const { left, right } = node;

    if (!left && !right) {
      // console.log('leaf', node.vsal);

      nums.push(node.val);
      return node.val;
    } else {
      const sum = dfs(left) + dfs(right) + node.val;
      // console.log('hoge', sum);
      nums.push(sum);
      return sum;
    }
  }

  dfs(root);

  let max = -Infinity;

  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, nums[i] * (sum - nums[i]));
  }

  console.log(nums);
  console.log(sum);

  return max;
}
