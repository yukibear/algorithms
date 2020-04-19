package solution

import (
	"github.com/yukisato/leetcode-util/datastructure"
)

// TreeNode structure for LeetCode
type TreeNode = datastructure.TreeNode

func diameterOfBinaryTree(root *TreeNode) int {
	if root == nil || root.Left == nil && root.Right == nil {
		return 0
	}

	maxLen, maxSum := dfs(root)

	return max(maxLen-1, maxSum)
}

func dfs(node *TreeNode) (int, int) {
	if node == nil {
		return 0, 0
	}

	len1, sum1 := dfs(node.Left)
	len2, sum2 := dfs(node.Right)

	return max(len1, len2) + 1, max(len1+len2, sum1, sum2)

}

func max(nums ...int) int {
	max := nums[0]

	for i := 1; i < len(nums); i++ {
		if max < nums[i] {
			max = nums[i]
		}
	}

	return max
}
