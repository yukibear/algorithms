package solution

import (
	"testing"

	ds "github.com/yukisato/leetcode-util/datastructure"
)

func Test_0437_PathSumIII(t *testing.T) {
	t.Parallel()

	type in = struct {
		arg1 *TreeNode
		arg2 int
	}
	tests := []struct {
		in  in
		out int
	}{
		{
			in{
				ds.CreateTreeNodeFromString([]string{"1", "1"}),
				2,
			},
			1,
		},
		{
			in{
				ds.CreateTreeNodeFromString([]string{"1", "1", "null", "0", "null", "-1", "null", "1"}),
				2,
			},
			3,
		},
		{
			in{
				ds.CreateTreeNodeFromString([]string{"10", "5", "-3", "3", "2", "null", "11", "3", "-2", "null", "1"}),
				8,
			},
			3,
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := pathSum(tt.in.arg1, tt.in.arg2)

			if got != tt.out {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
