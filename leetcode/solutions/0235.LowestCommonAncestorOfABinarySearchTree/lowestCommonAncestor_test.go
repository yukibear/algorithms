package solution

import (
	"testing"

	"github.com/google/go-cmp/cmp"
	ds "github.com/yukisato/leetcode-util/datastructure"
)

func Test_0235_LowestCommonAncestorOfABinarySearchTree(t *testing.T) {
	{
		arg1 := ds.CreateTreeNodeFromString([]string{"6", "2", "8", "0", "4", "7", "9", "null", "null", "3", "5"})
		arg2 := arg1.Left
		arg3 := arg1.Right
		got := lowestCommonAncestor(arg1, arg2, arg3)

		if !cmp.Equal(got, arg1) {
			t.Errorf("got %#v want %#v", got, arg1)
		}
	}

	{
		arg1 := ds.CreateTreeNodeFromString([]string{"6", "2", "8", "0", "4", "7", "9", "null", "null", "3", "5"})
		arg2 := arg1.Left
		arg3 := arg1.Left.Right
		got := lowestCommonAncestor(arg1, arg2, arg3)

		if !cmp.Equal(got, arg2) {
			t.Errorf("got %#v want %#v", got, arg2)
		}
	}
}
