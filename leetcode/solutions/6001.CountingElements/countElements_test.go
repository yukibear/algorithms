package solution

import (
	"testing"
)

func Test_0000_CountingElements(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  []int
		out int
	}{
		{nil, 0},
		{[]int{1}, 0},
		{[]int{1, 1, 1}, 0},
		{[]int{1, 2, 3}, 2},
		{[]int{1, 1, 2}, 2},
		{[]int{1, 1, 3, 3, 5, 5, 7, 7}, 0},
		{[]int{1, 3, 2, 3, 5, 0}, 3},
		{[]int{1, 1, 2, 2}, 2},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := countElements(tt.in)

			if got != tt.out {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
