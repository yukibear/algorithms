package solution

// MyHashSet contains its data and numbers of row and colmn.
type MyHashSet struct {
	data   [][]bool
	numRow int
	numCol int
}

// Constructor initializes MyHashSet.
func Constructor() MyHashSet {
	data := make([][]bool, 1000)

	return MyHashSet{
		data:   data,
		numRow: 1000,
		numCol: 1000,
	}
}

// Add just sets target hash data true
func (h *MyHashSet) Add(key int) {
	i, j := h.hash(key)
	h.data[i][j] = true
}

// Remove sets target hash data false
func (h *MyHashSet) Remove(key int) {
	i, j := h.hash(key)
	h.data[i][j] = false
}

// Contains returns a data of target in [][]bool.
func (h *MyHashSet) Contains(key int) bool {
	i, j := h.hash(key)
	return h.data[i][j]
}

// hash creates numbers of row and column to access to internal hash table.
func (h *MyHashSet) hash(key int) (int, int) {
	i, j := key%h.numRow, key/h.numRow

	if len(h.data[i]) == 0 {
		h.data[i] = make([]bool, h.numCol)
	}

	return i, j
}
