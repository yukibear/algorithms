package solution

type ListNode struct {
	Val  int
	Next *ListNode
}

func hasCycle(head *ListNode) bool {
	walker := head
	runner := head

	for walker != nil && runner != nil && runner.Next != nil {
		walker = walker.Next
		runner = runner.Next.Next

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
