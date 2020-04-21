package solution

import (
	"testing"
)

var matrix [][]int

type BinaryMatrix struct {
}

func (b *BinaryMatrix) Get(x, y int) int {
	return matrix[x][y]
}

func (b *BinaryMatrix) Dimensions() []int {
	mat := make([]int, 2)
	if len(matrix) > 0 {
		mat[0], mat[1] = len(matrix), len(matrix[0])
	}
	return mat
}

func Test_6003_LeftmostColumnWithAtLeastAOne(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  [][]int
		out int
	}{
		{
			[][]int{
				{0, 1},
				{1, 1},
			},
			0,
		},
		{
			[][]int{
				{0, 0},
				{0, 1},
			},
			1,
		},
		{
			[][]int{
				{0, 0},
				{0, 0},
			},
			-1,
		},
		{
			[][]int{
				{0, 0, 0, 1},
				{0, 0, 1, 1},
				{0, 1, 1, 1},
			},
			1,
		},
		{
			[][]int{
				{1, 1, 1, 1, 1},
				{0, 0, 0, 1, 1},
				{0, 0, 1, 1, 1},
				{0, 0, 0, 0, 1},
				{0, 0, 0, 0, 0},
			},
			0,
		},
	}

	for _, tt := range tests {
		matrix = tt.in
		got := leftMostColumnWithOne(BinaryMatrix{})

		if got != tt.out {
			t.Errorf("got %#v want %#v", got, tt.out)
		}
	}
}
