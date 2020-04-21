package solution

import (
	"testing"

	"github.com/google/go-cmp/cmp"
)

func Test_0119_PascalsTriangleII(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  int
		out []int
	}{
		{0, []int{1}},
		{1, []int{1, 1}},
		{2, []int{1, 2, 1}},
		{3, []int{1, 3, 3, 1}},
		{4, []int{1, 4, 6, 4, 1}},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := getRow(tt.in)

			if !cmp.Equal(got, tt.out) {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
