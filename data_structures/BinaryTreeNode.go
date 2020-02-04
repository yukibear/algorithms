package datastructures

// BinaryTreeNode literally indicates a node of a binary tree.
type BinaryTreeNode struct {
	Val   int
	Left  *BinaryTreeNode
	Right *BinaryTreeNode
}

func createBinaryTreeNode(nums []int) BinaryTreeNode {
	if len(nums) == 0 {
		return BinaryTreeNode{0, nil, nil}
	}

	root := BinaryTreeNode{nums[0], nil, nil}

	queue := []*BinaryTreeNode{&root}

	for len(nums) > 0 {
		node, queue := queue[0], queue[1:]
		leftVal, rightVal, nums := nums[0], nums[1], nums[2:]

		if leftVal > 0 {
			node.Left = &BinaryTreeNode{leftVal, nil, nil}
			queue = append(queue, node.Left)
		}
		if rightVal > 0 {
			node.Right = &BinaryTreeNode{rightVal, nil, nil}
			queue = append(queue, node.Right)
		}
	}

}
