package solution

import (
	"testing"

	ds "github.com/yukisato/leetcode-util/datastructure"
)

func Test_0993_CousinsInBinaryTree(t *testing.T) {
	t.Parallel()

	type in struct {
		arg1 *TreeNode
		arg2 int
		arg3 int
	}
	tests := []struct {
		in  in
		out bool
	}{
		{
			in{
				ds.CreateTreeNodeFromString([]string{"1", "2", "3", "4"}),
				4,
				3,
			},
			false,
		},
		{
			in{
				ds.CreateTreeNodeFromString([]string{"1", "2", "3", "null", "4", "null", "5"}),
				5,
				4,
			},
			true,
		},
		{
			in{
				ds.CreateTreeNodeFromString([]string{"1", "2", "3", "null", "4"}),
				2,
				3,
			},
			false,
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := isCousins(tt.in.arg1, tt.in.arg2, tt.in.arg3)

			if got != tt.out {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
