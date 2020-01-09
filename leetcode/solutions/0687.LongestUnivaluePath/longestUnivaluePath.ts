import { BinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

export default function longestUnivaluePath(
  root: BinaryTreeNode<number> | null
): number {
  dfs(root);

  return Math.max(...NUM_COUNT_MAP.values());
}

function dfs(node: BinaryTreeNode<number> | null) {
  if (!node) {
    return 0;
  }

  const { left, right } = node;
  let leftLen = 0;
  let rightLen = 0;

  if (left && left.val === node.val) {
    leftLen = dfs(left) + 1;
  } else {
    dfs(right);
  }

  if (right && right.val === node.val) {
    rightLen = dfs(right) + 1;
  } else {
    dfs(right);
  }

  if (left && right && left.val === right.val) {
    const sum = leftLen + rightLen
    NUM_COUNT_MAP.set(left.val, Math.max(sum, NUM_COUNT_MAP.get(left.val) || 0));
  }

  return Math.max(leftLen, rightLen);
}

const NUM_COUNT_MAP = new Map<number, number>();






// function countChildChainLength(node: BinaryTreeNode<number>): [number, number] {
//   return [
//     countChainLength(node.left, node.val),
//     countChainLength(node.right, node.val)
//   ];
// }

// function countChainLength(node: BinaryTreeNode<number> | null, parentVal: number) {
//   if (!node) {
//     return 0;
//   }

//   const [leftLen, rightLen] = countChildChainLength(node);
//   const { val: currentVal } = node;

//   if (currentVal !== parentVal) {
//     NUM_COUNT_MAP.set(
//       currentVal,
//       Math.max(maxChainLength, NUM_COUNT_MAP.get(currentVal) || 0)
//     );

//     return 0;
//   }

//   return maxChainLength + 1;
// }
