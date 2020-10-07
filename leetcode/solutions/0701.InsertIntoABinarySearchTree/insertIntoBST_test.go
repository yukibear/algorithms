package solution

import (
	"testing"

	ds "github.com/yukisato/leetcode-util/datastructure"

	"github.com/google/go-cmp/cmp"
)

func Test_0701_InsertIntoABinarySearchTree(t *testing.T) {
	t.Parallel()
	type in struct {
		arg1 *TreeNode
		arg2 int
	}
	tests := []struct {
		in  in
		out *TreeNode
	}{
		{
			in: in{
				ds.CreateTreeNodeFromString([]string{"40", "20", "60", "10", "30", "50", "70"}),
				25,
			},
			out: ds.CreateTreeNodeFromString([]string{"40", "20", "60", "10", "30", "50", "70", "null", "null", "25"}),
		},
		{
			in: in{
				ds.CreateTreeNodeFromString([]string{"4", "2", "7", "1", "3", "null", "null", "null", "null", "null", "null"}),
				5,
			},
			out: ds.CreateTreeNodeFromString([]string{"4", "2", "7", "1", "3", "5"}),
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := insertIntoBST(tt.in.arg1, tt.in.arg2)

			if !cmp.Equal(got, tt.out) {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
