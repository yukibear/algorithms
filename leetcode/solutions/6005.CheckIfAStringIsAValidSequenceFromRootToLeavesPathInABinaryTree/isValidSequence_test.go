package solution

import (
	"testing"

	ds "github.com/yukisato/leetcode-util/datastructure"
)

func Test_6005_CheckIfAStringIsAValidSequenceFromRootToLeavesPathInABinaryTree(t *testing.T) {
	t.Parallel()
	type in struct {
		arg1 *TreeNode
		arg2 []int
	}
	tests := []struct {
		in  in
		out bool
	}{
		{
			in{
				ds.CreateTreeNodeFromString([]string{"0", "1", "0", "0", "1", "0", "null", "null", "1", "0", "0"}),
				[]int{0, 1, 0, 1},
			},
			true,
		},
		{
			in{
				ds.CreateTreeNodeFromString([]string{"0", "1", "0", "0", "1", "0", "null", "null", "1", "0", "0"}),
				[]int{0, 0, 1},
			},
			false,
		},
		{
			in{
				ds.CreateTreeNodeFromString([]string{"0", "1", "0", "0", "1", "0", "null", "null", "1", "0", "0"}),
				[]int{0, 1, 1},
			},
			false,
		},
		{
			in{
				ds.CreateTreeNodeFromString([]string{"8", "3", "null", "2", "1", "5", "4"}),
				[]int{8},
			},
			false,
		},
		{
			in{
				ds.CreateTreeNodeFromString([]string{"5"}),
				[]int{5},
			},
			true,
		},
		{
			in{
				ds.CreateTreeNodeFromString([]string{"3", "0", "null", "2", "null", "null", "2", "9", "3"}),
				[]int{3, 0},
			},
			false,
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := isValidSequence(tt.in.arg1, tt.in.arg2)

			if got != tt.out {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
