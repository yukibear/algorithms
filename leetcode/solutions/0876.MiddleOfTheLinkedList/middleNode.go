package solution

import (
	"github.com/yukisato/leetcode-util/datastructure"
)

// ListNode structure for LeetCode
type ListNode = datastructure.ListNode

func middleNode(head *ListNode) *ListNode {
	result := head

	for head != nil && head.Next != nil {
		head = head.Next.Next
		result = result.Next
	}

	return result
}
