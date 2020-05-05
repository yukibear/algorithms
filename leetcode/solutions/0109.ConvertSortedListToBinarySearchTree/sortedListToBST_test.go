package solution

import (
	"testing"

	"github.com/google/go-cmp/cmp"
	ds "github.com/yukisato/leetcode-util/datastructure"
)

func Test_0109_ConvertSortedListToBinarySearchTree(t *testing.T) {
	t.Parallel()
	tests := []struct {
		in  *ListNode
		out *TreeNode
	}{
		{
			ds.CreateListNode([]int{0}),
			ds.CreateTreeNodeFromString([]string{"0"}),
		},
		{
			ds.CreateListNode([]int{-1, 0, 1}),
			ds.CreateTreeNodeFromString([]string{"0", "-1", "1"}),
		},
		{
			ds.CreateListNode([]int{-10, -3, 0, 5, 9}),
			ds.CreateTreeNodeFromString([]string{"0", "-3", "9", "-10", "null", "5"}),
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := sortedListToBST(tt.in)

			if !cmp.Equal(got, tt.out) {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
