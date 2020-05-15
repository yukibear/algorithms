export interface TrieNode {
  isEndOfWord: boolean;
  children: Map<string, TrieNode>;
}

export default class Trie {
  private trie: TrieNode;

  constructor() {
    this.trie = this.createTrieNode();
  }

  insert(word: string) {
    let node = this.trie;

    for (const key of word) {
      let nextNode = node.children.get(key);

      if (!nextNode) {
        nextNode = this.createTrieNode();
        node.children.set(key, nextNode);
      }

      node = nextNode;
    }

    node.isEndOfWord = true;
  }

  search(word: string): boolean {
    let node = this.trie;

    for (const key of word) {
      const nextNode = node.children.get(key);

      if (!nextNode) {
        return false;
      }

      node = nextNode;
    }

    return node.isEndOfWord;
  }

  startsWith(prefix: string): boolean {
    let node = this.trie;

    for (const key of prefix) {
      const nextNode = node.children.get(key);

      if (!nextNode) {
        return false;
      }

      node = nextNode;
    }

    return true;
  }

  createTrieNode(): TrieNode {
    return { isEndOfWord: false, children: new Map<string, TrieNode>() };
  }
}
