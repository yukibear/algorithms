package solution

import (
	"testing"

	"github.com/google/go-cmp/cmp"
)

func Test_0189_RotateArray(t *testing.T) {
	t.Parallel()
	type in struct {
		arg1 []int
		arg2 int
	}
	tests := []struct {
		in  in
		out []int
	}{
		{
			in{
				[]int{1, 2, 3, 4, 5, 6, 7},
				3,
			},
			[]int{5, 6, 7, 1, 2, 3, 4},
		},
		{
			in{
				[]int{-1, -100, 3, 99},
				2,
			},
			[]int{3, 99, -1, -100},
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			rotate(tt.in.arg1, tt.in.arg2)

			if !cmp.Equal(tt.in.arg1, tt.out) {
				t.Errorf("got %#v want %#v", tt.in.arg1, tt.out)
			}
		})
	}
}
