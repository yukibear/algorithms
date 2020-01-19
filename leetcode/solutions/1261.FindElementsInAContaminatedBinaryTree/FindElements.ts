import { BinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

export default class FindElements {
  node: BinaryTreeNode<number> | null;
  set: Set<number>;

  constructor(node: BinaryTreeNode<number> | null) {
    this.set = new Set<number>();
    this.node = node;
    this.recoverNode(node, 0);
  }

  recoverNode(node: BinaryTreeNode<number> | null, x: number) {
    if (!node) {
      return;
    }

    node.val = x;
    this.set.add(x);
    this.recoverNode(node.left!, 2 * x + 1);
    this.recoverNode(node.right!, 2 * x + 2);
  }

  find(target: number): boolean {
    return this.set.has(target);
  }
}
