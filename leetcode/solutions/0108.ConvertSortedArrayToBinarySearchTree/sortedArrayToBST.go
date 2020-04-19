package solution

import (
	"github.com/yukisato/leetcode-util/datastructure"
)

// TreeNode is re-defined for LeetCode contest
// because they use this name as a type of binary tree node
type TreeNode = datastructure.TreeNode

func sortedArrayToBST(nums []int) *TreeNode {
	if len(nums) == 0 {
		return nil
	}

	mid := (len(nums) - 1) / 2
	root := &TreeNode{Val: nums[mid]}
	dfs(nums[:mid], root, true)
	dfs(nums[mid+1:], root, false)

	return root
}

func dfs(nums []int, tree *TreeNode, isLeft bool) {
	if len(nums) == 0 {
		return
	}

	mid := (len(nums) - 1) / 2

	if isLeft {
		tree.Left = &TreeNode{Val: nums[mid]}
		dfs(nums[:mid], tree.Left, true)
		dfs(nums[mid+1:], tree.Left, false)
	} else {
		tree.Right = &TreeNode{Val: nums[mid]}
		dfs(nums[:mid], tree.Right, true)
		dfs(nums[mid+1:], tree.Right, false)
	}
}
