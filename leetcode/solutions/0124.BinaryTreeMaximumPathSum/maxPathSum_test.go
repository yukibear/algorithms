package solution

import (
	"testing"

	ds "github.com/yukisato/leetcode-util/datastructure"
)

func Test_0124_BinaryTreeMaximumPathSum(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  *ds.TreeNode
		out int
	}{
		{
			ds.CreateTreeNodeFromString([]string{"1", "2", "3"}),
			6,
		},
		{
			ds.CreateTreeNodeFromString([]string{"-10", "9", "20", "null", "null", "15", "7"}),
			42,
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := maxPathSum(tt.in)

			if got != tt.out {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
