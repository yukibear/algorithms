package solution

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func findTarget(root *TreeNode, k int) bool {
	return dfs(root, k, make(map[int]bool))
}

func dfs(root *TreeNode, k int, found map[int]bool) bool {
	if root == nil {
		return false
	}

	target := k - root.Val

	if found[target] {
		return true
	}

	found[root.Val] = true

	return dfs(root.Left, k, found) || dfs(root.Right, k, found)
}
