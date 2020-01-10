import { BinaryTreeNode as BST } from "../../../data_structures/BinaryTreeNode.ts";

export default function convertBST(
  node: BST<number> | null
): BST<number> | null {
  let sum = 0;

  const func = (node: BST<number> | null) => {
    if (!node) {
      return;
    }

    func(node.right);
    node.val += sum;
    sum = node.val;
    func(node.left);
  }

  func(node);

  return node;
}
