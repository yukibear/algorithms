export interface Node {
  val: number;
  children: Node[];
}

export default function preorder(
  root: Node
): number[] {
  const reuslt: number[] = [];

  function dfs(node: Node | null): void {
    if (!node) {
      return;
    }

    reuslt.push(node.val);

    for (const child of node.children) {
      dfs(child);
    }
  }

  dfs(root);

  return reuslt;
}
