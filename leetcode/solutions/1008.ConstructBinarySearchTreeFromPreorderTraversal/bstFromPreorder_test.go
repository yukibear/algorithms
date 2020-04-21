package solution

import (
	"testing"

	"github.com/google/go-cmp/cmp"
	ds "github.com/yukisato/leetcode-util/datastructure"
)

func Test_1008_ConstructBinarySearchTreeFromPreorderTraversal(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  []int
		out *TreeNode
	}{
		{
			[]int{8, 5, 1, 10, 12},
			ds.CreateTreeNodeFromString([]string{"8", "5", "10", "1", "null", "null", "12"}),
		},
		{
			[]int{8, 5, 1, 7, 10, 12},
			ds.CreateTreeNodeFromString([]string{"8", "5", "10", "1", "7", "null", "12"}),
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := bstFromPreorder(tt.in)

			if !cmp.Equal(got, tt.out) {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
