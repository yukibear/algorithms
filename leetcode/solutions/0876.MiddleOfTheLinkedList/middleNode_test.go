package solution

import (
	"testing"

	"github.com/google/go-cmp/cmp"

	ds "github.com/yukisato/leetcode-util/datastructure"
)

func Test_0876_MiddleOfTheLinkedList(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  *ListNode
		out *ListNode
	}{
		{
			ds.CreateListNode([]int{}),
			nil,
		},
		{
			ds.CreateListNode([]int{1}),
			ds.CreateListNode([]int{1}),
		},
		{
			ds.CreateListNode([]int{1, 2, 3, 4, 5}),
			ds.CreateListNode([]int{3, 4, 5}),
		},
		{
			ds.CreateListNode([]int{1, 2, 3, 4, 5, 6}),
			ds.CreateListNode([]int{4, 5, 6}),
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := middleNode(tt.in)

			if !cmp.Equal(got, tt.out) {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
