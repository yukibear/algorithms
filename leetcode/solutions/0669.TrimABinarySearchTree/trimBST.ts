import { TreeNode } from "../../../data_structures/TreeNode.ts";

/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
export default function trimBST(
  node: TreeNode<number> | null,
  L: number,
  R: number
): TreeNode<number> | null {
  const hasLeaf = (node: TreeNode<number> | null): boolean => {
    if (!node) return false;
    if (node.val === L) return true;

    return hasLeaf(node.left) || hasLeaf(node.right);
  }

  const createAnswer = (node: TreeNode<number>) => {
  }

  let queueR: (TreeNode<number> | null)[] = [node];
  while (queueR.length > 0) {
    let node: TreeNode<number> | null | undefined= queueR.pop();
    if (!node) continue;
    queueR.push(node.left);
    queueR.push(node.right);

    if (node.val === R) {
      if (hasLeaf(node)) return createAnswer(node);
    }
  }

  return null;
}
