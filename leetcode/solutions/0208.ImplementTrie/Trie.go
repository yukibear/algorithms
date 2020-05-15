package solution

const alphabetSize = 26
const a = 'a'

// Trie represents a structure of trie node
type Trie struct {
	isEndOfWord bool
	children    [alphabetSize]*Trie
}

// Constructor initializes a trie node.
func Constructor() Trie {
	return Trie{children: [alphabetSize]*Trie{}}
}

// Insert adds a word into the trie.
func (t *Trie) Insert(word string) {
	node := t

	for _, r := range word {
		key := r - a

		if node.children[key] == nil {
			node.children[key] = &Trie{}
		}

		node = node.children[key]
	}

	node.isEndOfWord = true
}

// Search returns if the word is in the trie.
func (t *Trie) Search(word string) bool {
	node := t

	for _, r := range word {
		key := r - a

		if node.children[key] == nil {
			return false
		}

		node = node.children[key]
	}

	return node.isEndOfWord
}

// StartsWith returns if there is any word in the trie that starts with the given prefix.
func (t *Trie) StartsWith(prefix string) bool {
	node := t

	for _, r := range prefix {
		key := r - a

		if node.children[key] == nil {
			return false
		}

		node = node.children[key]
	}

	return true
}
