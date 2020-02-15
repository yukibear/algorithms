package solution

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func sortedArrayToBST(nums []int) *TreeNode {
	if len(nums) == 0 {
		return nil
	}

	i := len(nums) / 2

	node := &TreeNode{Val: nums[i]}
	node.Left, node.Right = sortedArrayToBST(nums[:i]), sortedArrayToBST(nums[i+1:])

	return node
}
