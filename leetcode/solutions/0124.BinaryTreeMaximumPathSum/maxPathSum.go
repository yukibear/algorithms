package solution

import (
	"github.com/yukisato/leetcode-util/datastructure"
)

// TreeNode structure for LeetCode
type TreeNode = datastructure.TreeNode

func maxPathSum(root *TreeNode) int {
	best := root.Val
	dfs(root, &best)

	return best
}

func dfs(root *TreeNode, best *int) int {
	if root == nil {
		return 0
	}

	left := max(0, dfs(root.Left, best))
	right := max(0, dfs(root.Right, best))
	total := root.Val + left + right

	if *best < total {
		*best = total
	}

	return root.Val + max(left, right)
}

func max(a, b int) int {
	if a > b {
		return a
	}

	return b
}
