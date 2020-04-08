package solution

import (
	"testing"

	"github.com/google/go-cmp/cmp"

	ds "../../../datastructure"
)

func Test_0876_MiddleOfTheLinkedList(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  *ListNode
		out *ListNode
	}{
		{
			ds.CreateSinglyLinkedListNode([]int{}),
			nil,
		},
		{
			ds.CreateSinglyLinkedListNode([]int{1}),
			ds.CreateSinglyLinkedListNode([]int{1}),
		},
		{
			ds.CreateSinglyLinkedListNode([]int{1, 2, 3, 4, 5}),
			ds.CreateSinglyLinkedListNode([]int{3, 4, 5}),
		},
		{
			ds.CreateSinglyLinkedListNode([]int{1, 2, 3, 4, 5, 6}),
			ds.CreateSinglyLinkedListNode([]int{4, 5, 6}),
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
