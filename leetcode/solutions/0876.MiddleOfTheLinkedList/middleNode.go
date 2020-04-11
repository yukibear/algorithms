package solution

import (
	"../../../datastructure"
)

// ListNode structure for LeetCode
type ListNode = datastructure.SinglyLinkedListNode

func middleNode(head *ListNode) *ListNode {
	result := head

	for head != nil && head.Next != nil {
		head = head.Next.Next
		result = result.Next
	}

	return result
}
