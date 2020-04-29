package solution

// DoubleListNode is a structure of doubly linked list
type DoubleListNode struct {
	val  int
	prev *DoubleListNode
	next *DoubleListNode
}

// FirstUnique represents an object manupilated.
type FirstUnique struct {
	head    *DoubleListNode
	tail    *DoubleListNode
	listMap map[int]*DoubleListNode
}

// Constructor returns an instance of FirstUnique.
func Constructor(nums []int) FirstUnique {
	head := &DoubleListNode{val: -2}
	tail := &DoubleListNode{val: -1, prev: head}
	head.next = tail
	fu := FirstUnique{
		head:    head,
		tail:    tail,
		listMap: make(map[int]*DoubleListNode),
	}

	for _, num := range nums {
		fu.Add(num)
	}

	return fu
}

// ShowFirstUnique returns the first unique number passed by Add() method.
func (fu *FirstUnique) ShowFirstUnique() int {
	return fu.head.next.val
}

// Add simply adds geven number at the end of DoubleListNode if it is unique and set it into listMap to keep it distinct.
// Remove the given number from DoubleListNode if it already exists in listMap.
func (fu *FirstUnique) Add(value int) {
	if n, ok := fu.listMap[value]; ok {
		if n.prev == nil {
			return
		}

		n.prev.next = n.next
		n.next.prev = n.prev
		n.prev, n.next = nil, nil
		return
	}

	node := &DoubleListNode{val: value, prev: fu.tail.prev, next: fu.tail}
	fu.tail.prev.next = node
	fu.tail.prev = node
	fu.listMap[value] = node
}
