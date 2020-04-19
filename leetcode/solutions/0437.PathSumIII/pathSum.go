package solution

import (
	"github.com/yukisato/leetcode-util/datastructure"
)

// TreeNode structure for LeetCode
type TreeNode = datastructure.TreeNode

func pathSum(root *TreeNode, sum int) int {
	return dfs(root, sum, []int{})
}

func dfs(node *TreeNode, sum int, nums []int) int {
	if node == nil {
		return 0
	}

	count := 0
	nums = append(nums, node.Val)
	currentSum := 0

	for i := len(nums) - 1; i >= 0; i-- {
		currentSum += nums[i]

		if currentSum == sum {
			count++
		}
	}

	childrenTotalCount := dfs(node.Left, sum, nums) + dfs(node.Right, sum, nums)
	nums = nums[:len(nums)-1]

	return childrenTotalCount + count
}
