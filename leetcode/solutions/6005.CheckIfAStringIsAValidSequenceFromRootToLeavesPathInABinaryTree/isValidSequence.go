package solution

import (
	"github.com/yukisato/leetcode-util/datastructure"
)

// TreeNode structure for LeetCode
type TreeNode = datastructure.TreeNode

func isValidSequence(root *TreeNode, arr []int) bool {
	return checkByDfs(root, arr, 0)
}

func checkByDfs(root *TreeNode, arr []int, i int) bool {
	if root == nil || i == len(arr) || root.Val != arr[i] {
		return false
	}

	if root.Left == nil && root.Right == nil {
		return i == len(arr)-1
	}

	i++

	return checkByDfs(root.Left, arr, i) || checkByDfs(root.Right, arr, i)
}
