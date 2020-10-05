package solution

import (
	"testing"
)

func Test_0525_ContiguousArray(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  []int
		out int
	}{
		{[]int{0, 1}, 2},
		{[]int{0, 1, 0}, 2},
		{[]int{1, 0, 1}, 2},
		{[]int{1, 0, 1, 0}, 4},
		{[]int{1, 0, 1, 0, 0}, 4},
		{[]int{1, 1, 0, 1, 0}, 4},
		{[]int{1, 0, 1, 0, 1}, 4},
		{[]int{0, 0, 0, 1, 1, 1, 0}, 6},
		{[]int{0, 0, 1, 0, 0, 0, 1, 1}, 6},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := findMaxLength(tt.in)

			if got != tt.out {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
