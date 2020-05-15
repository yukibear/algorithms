package solution

type MapSum struct {
	num      int
	children [26]*MapSum
}

// Constructor initializes a MapSum data.
func Constructor() MapSum {
	return MapSum{}
}

// Insert adds a word into a trie.
func (m *MapSum) Insert(key string, val int) {
	node := m

	for _, r := range key {
		key := r - 'a'

		if node.children[key] == nil {
			node.children[key] = &MapSum{}
		}

		node = node.children[key]
	}

	node.num = val
}

// Sum adds up all the values prefixed with the given string.
func (m *MapSum) Sum(prefix string) int {
	node := m

	for _, r := range prefix {
		key := r - 'a'

		if node.children[key] == nil {
			return 0
		}

		node = node.children[key]
	}

	return sumNodes(node)
}

// sumNodes adds up all the values in the given trie node.
func sumNodes(node *MapSum) int {
	if node == nil {
		return 0
	}

	sum := node.num

	for _, child := range node.children {
		sum += sumNodes(child)
	}

	return sum
}
