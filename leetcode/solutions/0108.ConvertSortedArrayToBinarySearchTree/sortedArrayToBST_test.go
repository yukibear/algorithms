package solution

import (
	"testing"

	ds "../../../datastructure"

	"github.com/google/go-cmp/cmp"
)

func Test_0108_sortedArrayToBST(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  []int
		out *TreeNode
	}{
		{
			[]int{},
			nil,
		},
		{
			[]int{0},
			ds.CreateBinaryTreeNodeFromString([]string{"0"}),
		},
		{
			[]int{-1, 0, 1},
			ds.CreateBinaryTreeNodeFromString([]string{"0", "-1", "1"}),
		},
		{
			[]int{-4, -3, -2, -1, 0, 1, 2, 3, 4, 5},
			ds.CreateBinaryTreeNodeFromString([]string{
				"0",
				"-3",
				"3",
				"-4",
				"-2",
				"1",
				"4",
				"null",
				"null",
				"null",
				"-1",
				"null",
				"2",
				"null",
				"5",
			}),
		},
		{
			[]int{-10, -3, 0, 5, 9},
			ds.CreateBinaryTreeNodeFromString([]string{
				"0",
				"-10",
				"5",
				"null",
				"-3",
				"null",
				"9",
			}),
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := sortedArrayToBST(tt.in)

			if !cmp.Equal(got, tt.out) {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
