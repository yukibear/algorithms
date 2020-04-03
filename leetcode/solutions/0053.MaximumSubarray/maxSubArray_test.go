package solution

import (
	"testing"

	"github.com/google/go-cmp/cmp"
)

func Test_0053_MaximumSubarray(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  []int
		out int
	}{
		{[]int{-1}, -1},
		{[]int{1}, 1},
		{[]int{-3, -2, -3, -4}, -2},
		{[]int{0, 0, 0, 0, 0}, 0},
		{[]int{1, 1, 1, 1, 1}, 5},
		{[]int{1, -1, 1, -1, 1}, 1},
		{[]int{1, -1, 2, -1, 2}, 3},
		{[]int{-2, 1, -3, 4, -1, 2, 1, -5, 4}, 6},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := maxSubArray(tt.in)

			if !cmp.Equal(got, tt.out) {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
