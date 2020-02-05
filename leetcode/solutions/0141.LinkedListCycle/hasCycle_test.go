package solution

import (
	"testing"

	"github.com/google/go-cmp/cmp"
)

func Test_0141_LinkedListCycle(t *testing.T) {
	type Test struct {
		in  *ListNode
		out bool
	}
	var tests []Test

	node := &ListNode{
		1,
		&ListNode{
			2,
			nil,
		},
	}
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
