package datastructure

import (
	"testing"

	"github.com/google/go-cmp/cmp"
)

func Test_CreateSinglyLinkedListNode(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  []int
		out *SinglyLinkedListNode
	}{
		{nil, nil},
		{
			[]int{1},
			&SinglyLinkedListNode{
				1,
				nil,
			},
		},
		{
			[]int{2, 2, 0},
			&SinglyLinkedListNode{
				2,
				&SinglyLinkedListNode{
					2,
					&SinglyLinkedListNode{
						0,
						nil,
					},
				},
			},
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := CreateSinglyLinkedListNode(tt.in)

			if !cmp.Equal(got, tt.out) {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
