package solution

import (
	"github.com/yukisato/leetcode-util/datastructure"
)

// TreeNode structure for LeetCode
type TreeNode = datastructure.TreeNode

func bstFromPreorder(preorder []int) *TreeNode {
	root := &TreeNode{}
	buildBst(root, preorder)

	return root
}

func buildBst(root *TreeNode, nums []int) {
	root.Val = nums[0]
	end := 1

	for ; end < len(nums) && nums[0] > nums[end]; end++ {
	}

	if end > 1 {
		root.Left = &TreeNode{}
		buildBst(root.Left, nums[1:end])
	}
	if len(nums) > end {
		root.Right = &TreeNode{}
		buildBst(root.Right, nums[end:])
	}
}
