export interface Node<T> {
  val: T;
  children: Node<T>[];
}

export default function maxDepth(
  node: Node<number> | null
): number {
    if (node == null) return 0;

    let max = 0;
    for (let child of node.children) {
      max = Math.max(maxDepth(child), max);
    }
    return 1 + max;
}
