package solution

import (
	"testing"
)

func Test_1427_PerformStringShifts(t *testing.T) {
	t.Parallel()

	type in struct {
		arg1 string
		arg2 [][]int
	}
	tests := []struct {
		in  in
		out string
	}{
		{
			in{
				"abc",
				[][]int{
					{0, 1},
					{1, 2},
				},
			},
			"cab",
		},
		{
			in{
				"abcdefg",
				[][]int{
					{1, 1},
					{1, 1},
					{0, 2},
					{1, 3},
				},
			},
			"efgabcd",
		},
		{
			in{
				"wpdhhcj",
				[][]int{
					{0, 7},
					{1, 7},
					{1, 0},
					{1, 3},
					{0, 3},
					{0, 6},
					{1, 2},
				},
			},
			"hcjwpdh",
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := stringShift(tt.in.arg1, tt.in.arg2)

			if got != tt.out {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
