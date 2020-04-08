package datastructure

type SinglyLinkedListNode struct {
	Val  int
	Next *SinglyLinkedListNode
}

func CreateSinglyLinkedListNode(nums []int) *SinglyLinkedListNode {
	if len(nums) == 0 {
		return nil
	}

	head := &SinglyLinkedListNode{nums[0], &SinglyLinkedListNode{-1, nil}}
	node := head

	for _, num := range nums[1:] {
		node = node.Next
		node.Val = num
		node.Next = &SinglyLinkedListNode{-1, nil}
	}

	node.Next = nil

	return head
}
