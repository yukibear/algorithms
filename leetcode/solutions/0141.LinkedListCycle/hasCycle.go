package solution

import (
	"github.com/yukisato/leetcode-util/datastructure"
)

// ListNode structure for LeetCode
type ListNode = datastructure.ListNode

func hasCycle(head *ListNode) bool {
	walker, runner := head, head

	for walker != nil && runner != nil && runner.Next != nil {
		walker, runner = walker.Next, runner.Next.Next

		if walker == runner {
			return true
		}
	}

	return false
}

func hasCycle1(head *ListNode) bool {
	seen := []*ListNode{}

	for head != nil {
		seen = append(seen, head)
		head = head.Next

		for _, node := range seen {
			if node == head {
				return true
			}
		}
	}

	return false
}
