package solution

import (
	"testing"

	ds "github.com/yukisato/leetcode-util/datastructure"
)

func Test_0543_DiameterOfBinaryTree(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  *TreeNode
		out int
	}{
		{nil, 0},
		{ds.CreateTreeNodeFromString([]string{"1"}), 0},
		{ds.CreateTreeNodeFromString([]string{"1", "null", "2"}), 1},
		{ds.CreateTreeNodeFromString([]string{"1", "2", "3", "4", "5"}), 3},
		{ds.CreateTreeNodeFromString([]string{"2", "3", "null", "1"}), 2},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := diameterOfBinaryTree(tt.in)

			if got != tt.out {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
