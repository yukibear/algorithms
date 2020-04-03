package solution

import (
	"../../../datastructure"
)

// TreeNode structure for LeetCode
type TreeNode = datastructure.BinaryTreeNode

func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
	if root == p || root == q {
		return root
	}

	if root.Val > p.Val && root.Val > q.Val {
		return lowestCommonAncestor(root.Left, p, q)
	} else if root.Val < p.Val && root.Val < q.Val {
		return lowestCommonAncestor(root.Right, p, q)
	}

	return root
}
