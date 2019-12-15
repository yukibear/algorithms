import { TreeNode as BST } from "../../../data_structures/TreeNode.ts";

export default function convertBST(
  node: BST<number> | null
): BST<number> | null {

  const func = (node: BST<number> | null, val: number): number => {
    if (!node) {
      return 0;
    }

    node.val += val;
    node.val += func(node.right, 0);
    func(node.left, node.val);
    return node.val;
  }

  func(node, 0);
  return node;
}
