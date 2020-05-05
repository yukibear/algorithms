package solution

import (
	"github.com/yukisato/leetcode-util/datastructure"
)

// ListNode structure for LeetCode
type ListNode = datastructure.ListNode

// TreeNode structure for LeetCode
type TreeNode = datastructure.TreeNode

func sortedListToBST(head *ListNode) *TreeNode {
	var nums []int

	for head != nil {
		nums = append(nums, head.Val)
		head = head.Next
	}

	return buildBst(nums)
}

func buildBst(nums []int) *TreeNode {
	if len(nums) == 0 {
		return nil
	}

	mid := len(nums) / 2
	node := &TreeNode{Val: nums[mid]}
	node.Left = buildBst(nums[:mid])
	node.Right = buildBst(nums[mid+1:])

	return node
}
