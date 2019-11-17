import TreeNode from "../../../data_structures/TreeNode.ts";

/**
 * @param {TreeNode} root
 */
export default class FindElements {

  node: TreeNode;
  set;

  constructor(node: TreeNode) {
    this.set = new Set();
    this.node = node;
    this.recoverNode(node, 0);
  }

  recoverNode(node: TreeNode, x: number) {
    if (!node) return;

    node.val = x;
    this.set.add(x);
    this.recoverNode(node.left!, 2 * x + 1);
    this.recoverNode(node.right!, 2 * x + 2);
  }

  /**
   * @param {number} target
   * @return {boolean}
   */
  find(target: number) {
    return this.set.has(target);
  }
}
