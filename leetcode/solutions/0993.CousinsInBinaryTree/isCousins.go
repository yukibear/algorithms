package solution

import (
	"github.com/yukisato/leetcode-util/datastructure"
)

// TreeNode structure for LeetCode
type TreeNode = datastructure.TreeNode

func isCousins(root *TreeNode, x int, y int) bool {
	type queueData struct {
		depth   int
		rootVal int
		node    *TreeNode
	}
	queue := []queueData{
		{1, root.Val, root.Left},
		{1, root.Val, root.Right},
	}

	type seekData struct {
		pairDepth int
		rootVal   int
		val       int
	}
	seeking := seekData{
		0,
		root.Val,
		root.Val,
	}

	for len(queue) > 0 {
		depth, rootVal, node := queue[0].depth, queue[0].rootVal, queue[0].node
		queue = queue[1:]

		switch {
		case node == nil:
			continue
		case node.Val == seeking.val:
			return rootVal != seeking.rootVal && depth == seeking.pairDepth
		case node.Val == x:
			seeking = seekData{
				pairDepth: depth,
				rootVal:   rootVal,
				val:       y,
			}
		case node.Val == y:
			seeking = seekData{
				pairDepth: depth,
				rootVal:   rootVal,
				val:       x,
			}
		default:
			depth++
			queue = append(
				queue,
				queueData{depth, node.Val, node.Left},
				queueData{depth, node.Val, node.Right},
			)
		}
	}

	return false
}
