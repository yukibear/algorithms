package solution

import (
	"testing"
)

func Test_0001_TwoSum(t *testing.T) {
	t.Parallel()

	type in struct {
		arg1 []int
		arg2 int
	}
	tests := []struct {
		in  [][]int
		out int
	}{
		{
			[][]int{
				{1, 3, 1},
				{1, 5, 1},
				{4, 2, 1},
			},
			7,
		},
		{
			[][]int{
				{1},
			},
			1,
		},
		{
			[][]int{
				{0},
			},
			0,
		},
		{
			[][]int{
				{1, 1},
				{2, 1},
			},
			3,
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := minPathSum(tt.in)

			if got != tt.out {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
