package solution

import (
	"testing"

	"github.com/google/go-cmp/cmp"
)

func Test_0119_PascalsTriangleII(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  []int
		out []int
	}{
		{
			[]int{1, 2, 3, 4},
			[]int{24, 12, 8, 6},
		},
		{
			[]int{0, 1},
			[]int{1, 0},
		},
		{
			[]int{0, 0, 0, 0},
			[]int{0, 0, 0, 0},
		},
		{
			[]int{1, 1, 1, 1},
			[]int{1, 1, 1, 1},
		},
		{
			[]int{0, 1, 2, 3, 4, 0},
			[]int{0, 0, 0, 0, 0, 0},
		},
		{
			[]int{0, 1, 2, 3, 4},
			[]int{24, 0, 0, 0, 0},
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := productExceptSelf(tt.in)

			if !cmp.Equal(got, tt.out) {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
