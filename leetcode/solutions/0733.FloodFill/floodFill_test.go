package solution

import (
	"testing"

	"github.com/google/go-cmp/cmp"
)

func Test_0733_FloodFill(t *testing.T) {
	t.Parallel()
	type in struct {
		arg1 [][]int
		arg2 int
		arg3 int
		arg4 int
	}
	tests := []struct {
		in  in
		out [][]int
	}{
		{
			in{
				[][]int{
					{1, 1, 1},
					{1, 1, 0},
					{1, 0, 1},
				},
				1,
				1,
				2,
			},
			[][]int{
				{2, 2, 2},
				{2, 2, 0},
				{2, 0, 1},
			},
		},
		{
			in{
				[][]int{
					{0, 0, 0},
					{0, 0, 0},
				},
				0,
				0,
				2,
			},
			[][]int{
				{2, 2, 2},
				{2, 2, 2},
			},
		},
		{
			in{
				[][]int{
					{0, 0, 0},
					{0, 1, 1},
				},
				1,
				1,
				1,
			},
			[][]int{
				{0, 0, 0},
				{0, 1, 1},
			},
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := floodFill(tt.in.arg1, tt.in.arg2, tt.in.arg3, tt.in.arg4)

			if !cmp.Equal(got, tt.out) {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
