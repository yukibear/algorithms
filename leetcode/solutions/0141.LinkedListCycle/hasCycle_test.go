package solution

import (
	"testing"

	"github.com/google/go-cmp/cmp"
	ds "github.com/yukisato/leetcode-util/datastructure"
)

func Test_0141_LinkedListCycle(t *testing.T) {
	t.Parallel()

	type Test struct {
		in  *ListNode
		out bool
	}
	var tests []Test

	node := ds.CreateListNode([]int{1, 2})
	node.Next.Next = node

	tests = append(tests, Test{node, true})

	for i, tt := range tests {
		i := i
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := hasCycle(tt.in)

			if !cmp.Equal(got, tt.out) {
				t.Errorf("\n#%02d\ngot: %#v\nwant: %#v", i, got, tt.out)
			}
		})
	}
}
