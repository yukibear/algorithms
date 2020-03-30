package datastructure

import (
	"testing"

	"github.com/google/go-cmp/cmp"
)

type TreeNode = BinaryTreeNode

func Test_CreateBinaryTreeNode(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  []string
		out BinaryTreeNode
	}{
		{
			[]string{"0"},
			BinaryTreeNode{
				Val:   0,
				Left:  nil,
				Right: nil,
			},
		},
		{
			[]string{"1", "null", "2"},
			BinaryTreeNode{
				Val:  1,
				Left: nil,
				Right: &BinaryTreeNode{
					Val:   2,
					Left:  nil,
					Right: nil,
				},
			},
		},
		{
			[]string{"3", "9", "20", "null", "null", "15", "7"},
			BinaryTreeNode{
				Val: 3,
				Left: &BinaryTreeNode{
					9,
					nil,
					nil,
				},
				Right: &BinaryTreeNode{
					Val: 20,
					Left: &BinaryTreeNode{
						15,
						nil,
						nil,
					},
					Right: &BinaryTreeNode{
						7,
						nil,
						nil,
					},
				},
			},
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := CreateBinaryTreeNodeFromString(tt.in)

			if !cmp.Equal(got, tt.out) {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
