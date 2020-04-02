package solution

import (
	"testing"

	"github.com/google/go-cmp/cmp"
)

func Test_0088_MergeSortedArray(t *testing.T) {
	t.Parallel()

	type in = struct {
		arg1 []int
		arg2 int
		arg3 []int
		arg4 int
	}
	tests := []struct {
		in  in
		out []int
	}{
		{
			in{
				[]int{1, 2, 3, 0, 0, 0},
				3,
				[]int{2, 5, 6},
				3,
			},
			[]int{1, 2, 2, 3, 5, 6},
		},
		{
			in{
				[]int{-1, 0, 0, 3, 3, 3, 0, 0, 0},
				6,
				[]int{1, 2, 2},
				3,
			},
			[]int{-1, 0, 0, 1, 2, 2, 3, 3, 3},
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			merge(tt.in.arg1, tt.in.arg2, tt.in.arg3, tt.in.arg4)

			if !cmp.Equal(tt.in.arg1, tt.out) {
				t.Errorf("got %#v want %#v", tt.in.arg1, tt.out)
			}
		})
	}
}
