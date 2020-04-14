package solution

import (
	"testing"

	"github.com/google/go-cmp/cmp"
	ds "github.com/yukisato/leetcode-util/datastructure"
)

func Test_0112_PathSum(t *testing.T) {
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
				nil,
				0,
			},
			false,
		},
		{
			in{
				ds.CreateTreeNodeFromString([]string{"1"}),
				1,
			},
			true,
		},
		{
			in{
				ds.CreateTreeNodeFromString([]string{"1", "2"}),
				1,
			},
			false,
		},
		{
			in{
				ds.CreateTreeNodeFromString([]string{"5", "4", "8", "11", "null", "13", "4", "7", "2", "null", "null", "null", "1"}),
				22,
			},
			true,
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := hasPathSum(tt.in.arg1, tt.in.arg2)

			if !cmp.Equal(got, tt.out) {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
