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
type treeNodeQueue struct {
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
	var root BinaryTreeNode
	numString := numStrings[0]
	numStrings = numStrings[1:]

	if num, err := strconv.Atoi(numString); err == nil {
		root = BinaryTreeNode{num, nil, nil}
	} else {
		return nil
	}

	if len(numStrings) == 0 {
		return &root
	}

	queue := []treeNodeQueue{
		treeNodeQueue{&root, true},
		treeNodeQueue{&root, false},
	}

	for len(numStrings) > 0 {
		q, queue := queue[0], queue[1:]
		numString := numStrings[0]
		numStrings = numStrings[1:]

		if num, err := strconv.Atoi(numString); err == nil {
			if q.isLeft {
				q.node.Left = &BinaryTreeNode{num, nil, nil}
			} else {
				q.node.Right = &BinaryTreeNode{num, nil, nil}
			}

			queue = append(
				queue,
				treeNodeQueue{q.node.Left, true},
				treeNodeQueue{q.node.Right, false},
			)
		}
	}

	return &root
}
