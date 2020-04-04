package solution

import (
	"../../../datastructure"
)

// TreeNode structure for LeetCode
type TreeNode = datastructure.BinaryTreeNode

func findTarget(root *TreeNode, k int) bool {
	return dfs(root, k, map[int]bool{})
}

func dfs(node *TreeNode, k int, targets map[int]bool) bool {
	if node == nil {
		return false
	}

	if targets[node.Val] {
		return true
	}

	targets[k-node.Val] = true

	return dfs(node.Left, k, targets) || dfs(node.Right, k, targets)
}
