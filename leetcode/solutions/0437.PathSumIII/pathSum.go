package solution

// TreeNode structure for LeetCode
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func pathSum(root *TreeNode, sum int) int {
	count := 0
	var nums []int

	dfs := func(node interface{}) {
		if node == nil {
			return
		}

		nums.push(node.val)
		check := 0

		for i = len(nums) - 1; i >= 0; i-- {
			check += nums[i]

			if check == sum {
				count++
			}
		}

		dfs(node.left)
		dfs(node.right)

		nums.pop()
	}

	dfs(root)

	return count
}
