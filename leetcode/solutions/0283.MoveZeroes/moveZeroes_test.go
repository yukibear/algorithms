package solution

import (
	"testing"

	"github.com/google/go-cmp/cmp"
)

func Test_0283_MoveZeroes(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  []int
		out []int
	}{
		{[]int{0}, []int{0}},
		{[]int{1}, []int{1}},
		{[]int{0, 0, 0}, []int{0, 0, 0}},
		{[]int{0, 1, 0}, []int{1, 0, 0}},
		{[]int{3, 2, 1}, []int{3, 2, 1}},
		{[]int{0, 1, 0, 3, 12}, []int{1, 3, 12, 0, 0}},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			moveZeroes(tt.in)

			if !cmp.Equal(tt.in, tt.out) {
				t.Errorf("got %#v want %#v", tt.in, tt.out)
			}
		})
	}
}
