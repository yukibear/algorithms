package solution

import (
	"../../../datastructure"
)

// ListNode structure for LeetCode
type ListNode = datastructure.SinglyLinkedListNode

func middleNode(head *ListNode) *ListNode {
	if head == nil {
		return nil
	}

	i := 0
	node := head

	for ; node != nil; i++ {
		node = node.Next
	}

	for i /= 2; i > 0; i-- {
		head = head.Next
	}

	return head
}
