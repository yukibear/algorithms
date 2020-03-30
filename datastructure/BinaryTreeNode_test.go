package datastructure

import (
	"testing"

	"github.com/google/go-cmp/cmp"
)

func Test_CreateBinaryTreeNode(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  []string
		out *BinaryTreeNode
	}{
		{
			[]string{},
			nil,
		},
		{
			[]string{"0"},
			&BinaryTreeNode{
				0,
				nil,
				nil,
			},
		},
		{
			[]string{"1", "null", "2"},
			&BinaryTreeNode{
				1,
				nil,
				&BinaryTreeNode{
					2,
					nil,
					nil,
				},
			},
		},
		{
			[]string{"3", "9", "20"},
			&BinaryTreeNode{
				3,
				&BinaryTreeNode{
					9,
					nil,
					nil,
				},
				&BinaryTreeNode{
					20,
					nil,
					nil,
				},
			},
		},
		{
			[]string{"3", "9", "20", "null", "null", "15", "7"},
			&BinaryTreeNode{
				3,
				&BinaryTreeNode{
					9,
					nil,
					nil,
				},
				&BinaryTreeNode{
					20,
					&BinaryTreeNode{
						15,
						nil,
						nil,
					},
					&BinaryTreeNode{
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
