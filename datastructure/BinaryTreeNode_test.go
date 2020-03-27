package datastructure

import (
	"testing"

	"github.com/google/go-cmp/cmp"
)

func Test_CreateBinaryTreeNode(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  []string
		out BinaryTreeNode
	}{
		{
			[]string{"3", "9", "20", "null", "null", "15", "7"},
			BinaryTreeNode{
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

	for i, tt := range tests {
		i := i
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := createBinaryTreeNode(tt.in)

			if !cmp.Equal(got, tt.out) {
				t.Errorf("\n#%02d\ngot: %#v\nwant: %#v", i, got, tt.out)
			}
		})
	}
}
