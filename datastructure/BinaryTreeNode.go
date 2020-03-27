package datastructure

import (
	"strconv"
)

// BinaryTreeNode literally indicates a node of a binary tree.
type BinaryTreeNode struct {
	Val   int
	Left  *BinaryTreeNode
	Right *BinaryTreeNode
}

func CreateBinaryTreeNodeFromString(numStrings []string) BinaryTreeNode {
	if len(numStrings) == 0 {
		return BinaryTreeNode{0, nil, nil}
	}

	var root BinaryTreeNode

	if num, err := strconv.Atoi(numStrings[0]); err == nil {
		root = BinaryTreeNode{num, nil, nil}
	} else {
		return BinaryTreeNode{0, nil, nil}
	}

	queue := []*BinaryTreeNode{&root}

	for len(numStrings) > 0 {
		node, queue := queue[0], queue[1:]

		leftVal := numStrings[0]
		numStrings = numStrings[1:]

		if num, err := strconv.Atoi(leftVal); err == nil {
			node.Left = &BinaryTreeNode{num, nil, nil}
			queue = append(queue, node.Left)
		}

		if len(numStrings) == 0 {
			return root
		}

		rightVal := numStrings[0]
		numStrings = numStrings[1:]

		if num, err := strconv.Atoi(rightVal); err == nil {
			node.Right = &BinaryTreeNode{num, nil, nil}
			queue = append(queue, node.Right)
		}
	}

	return root
}
