package solution

import (
	"testing"

	"github.com/google/go-cmp/cmp"
	ds "github.com/yukisato/leetcode-util/datastructure"
)

func Test_0653_TwoSumIVInputIsABST(t *testing.T) {
	t.Parallel()
	type in = struct {
		arg1 *TreeNode
		arg2 int
	}
	tests := []struct {
		in  in
		out bool
	}{
		{
			in{
				ds.CreateTreeNodeFromString([]string{"5", "3", "6", "2", "4", "null", "7"}),
				9,
			},
			true,
		},
		{
			in{
				ds.CreateTreeNodeFromString([]string{"5", "3", "6", "2", "4", "null", "7"}),
				28,
			},
			false,
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := findTarget(tt.in.arg1, tt.in.arg2)

			if !cmp.Equal(got, tt.out) {
				t.Errorf("got %#v want  %#v", got, tt.out)
			}
		})
	}
}
