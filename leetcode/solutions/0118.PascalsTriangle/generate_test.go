package solution

import (
	"testing"

	"github.com/google/go-cmp/cmp"
)

func Test_0118_PascalsTriangle(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  int
		out [][]int
	}{
		{0, [][]int{}},
		{1, [][]int{[]int{1}}},
		{2, [][]int{[]int{1}, []int{1, 1}}},
		{
			5,
			[][]int{
				{1},
				{1, 1},
				{1, 2, 1},
				{1, 3, 3, 1},
				{1, 4, 6, 4, 1}},
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := generate(tt.in)

			if !cmp.Equal(got, tt.out) {
				t.Errorf("got %#v want: %#v", got, tt.out)
			}
		})
	}
}
