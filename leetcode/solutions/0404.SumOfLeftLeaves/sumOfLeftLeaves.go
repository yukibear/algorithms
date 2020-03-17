package solution

// TreeNode indicates a binary tree node.
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func sumOfLeftLeaves(root *TreeNode) int {
	return dfs(root, false)
}

func dfs(node *TreeNode, isLeft bool) int {
	if node == nil {
		return 0
	}

	left, right := node.Left, node.Right

	if left == nil && right == nil && isLeft {
		return node.Val
	}

	return dfs(left, true) + dfs(right, false)
}
