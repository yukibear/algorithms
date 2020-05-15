export interface TrieNode {
  val: number;
  children: Map<string, TrieNode>;
}

export default class MapSum {
  private trie: TrieNode;

  constructor() {
    this.trie = this.createTrieNode();
  }

  insert(key: string, val: number) {
    let node = this.trie;

    for (const char of key) {
      let nextNode = node.children.get(char);

      if (!nextNode) {
        nextNode = this.createTrieNode();
        node.children.set(char, nextNode);
      }

      node = nextNode;
    }

    node.val = val;
  }

  sum(prefix: string): number {
    let node = this.trie;

    for (const char of prefix) {
      const nextNode = node.children.get(char);

      if (!nextNode) {
        return 0;
      }

      node = nextNode;
    }

    function sumUp(node: TrieNode | null): number {
      if (!node) {
        return 0;
      }

      let sum = node.val;

      for (const child of node.children.values()) {
        sum += sumUp(child);
      }

      return sum;
    }

    return sumUp(node);
  }

  createTrieNode(): TrieNode {
    return { val: 0, children: new Map<string, TrieNode>() };
  }
}
