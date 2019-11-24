export interface Node<T> {
  val: T;
  children: Node<T>[];
}

/**
 * @param {Node} node
 * @return {number}
 */
export default function maxDepth(
  node: Node<number>
): number {

  const dfs = (node: Node<number>) => {
    if (node == null) return 0;
    if (node.children.length === 0) return 1;

    let resuls = new Array(node.children.length).fill(0);
    for (let [i, child] of node.children.entries()) {
      resuls[i] = dfs(child);
    }
    return 1 + Math.max(...resuls);
  }
  return dfs(node);
}
