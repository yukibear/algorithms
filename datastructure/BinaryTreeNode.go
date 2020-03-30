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
type queueData struct {
	node   *BinaryTreeNode
	isLeft bool
}

// CreateBinaryTreeNodeFromString creates a tructure of BinaryTreeNode
// from an array of string(or "null") in LeetCode expression
// ex) ["1", "2", "null", "3"]
func CreateBinaryTreeNodeFromString(numStrings []string) *BinaryTreeNode {
	if len(numStrings) == 0 {
		return nil
	}

	numString := numStrings[0]
	numStrings = numStrings[1:]

	num, err := strconv.Atoi(numString)

	if err != nil {
		return nil
	}

	root := BinaryTreeNode{num, nil, nil}

	if len(numStrings) == 0 {
		return &root
	}

	queue := []queueData{
		queueData{&root, true},
		queueData{&root, false},
	}

	for len(numStrings) > 0 {
		q := queue[0]
		queue = queue[1:]
		numString := numStrings[0]
		numStrings = numStrings[1:]

		num, err := strconv.Atoi(numString)

		if err != nil {
			continue
		}

		if q.isLeft {
			q.node.Left = &BinaryTreeNode{num, nil, nil}
			queue = append(
				queue,
				queueData{q.node.Left, true},
				queueData{q.node.Left, false},
			)
		} else {
			q.node.Right = &BinaryTreeNode{num, nil, nil}
			queue = append(
				queue,
				queueData{q.node.Right, true},
				queueData{q.node.Right, false},
			)
		}
	}

	return &root
}
