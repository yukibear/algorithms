export interface TrieNode {
  isEndOfWord: boolean;
  children: (TrieNode | null)[];
}

const CHARCODE_A = "a".charCodeAt(0);

export default class Trie {
  private trie: TrieNode;

  constructor() {
    this.trie = this.createTrieNode();
  }

  insert(word: string) {
    let node = this.trie;

    for (let i = 0; i < word.length; i++) {
      const key = word.charCodeAt(i) - CHARCODE_A;

      if (!node.children[key]) {
        node.children[key] = this.createTrieNode();
      }

      node = node.children[key]!;
    }

    node.isEndOfWord = true;
  }

  search(word: string): boolean {
    let head = this.trie;

    for (let i = 0; i < word.length; i++) {
      const key = word.charCodeAt(i) - CHARCODE_A;

      if (!head.children[key]) {
        return false;
      }

      head = head.children[key]!;
    }

    return head.isEndOfWord;
  }

  startsWith(prefix: string): boolean {
    let head = this.trie;

    for (let i = 0; i < prefix.length; i++) {
      const key = prefix.charCodeAt(i) - CHARCODE_A;

      if (!head.children[key]) {
        return false;
      }

      head = head.children[key]!;
    }

    return true;
  }

  createTrieNode(): TrieNode {
    return { isEndOfWord: false, children: [null] };
  }
}
