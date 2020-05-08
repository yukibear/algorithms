package solution

import (
	"testing"
)

func Test_1232_CheckIfItIsAStraightLine(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  [][]int
		out bool
	}{
		{
			[][]int{{1, 2}},
			false,
		},
		{
			[][]int{{-1, 2}, {-2, 3}, {-3, 4}},
			true,
		},
		{
			[][]int{{-1, 2}, {-2, 4}},
			true,
		},
		{
			[][]int{{1, 2}, {2, 3}, {3, 4}, {4, 5}, {5, 6}, {6, 7}},
			true,
		},
		{
			[][]int{{1, 1}, {2, 2}, {3, 4}, {4, 5}, {5, 6}, {7, 7}},
			false,
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := checkStraightLine(tt.in)

			if got != tt.out {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
