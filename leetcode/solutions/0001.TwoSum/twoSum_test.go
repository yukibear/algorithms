package solution

import (
	"sort"
	"testing"

	"github.com/google/go-cmp/cmp"
)

func Test_0001_TwoSum(t *testing.T) {
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
			in{nil, 0},
			nil,
		},
		{
			in{[]int{0, 1}, 1},
			[]int{0, 1},
		},
		{
			in{[]int{0, 1, 2, -1}, 0},
			[]int{1, 3},
		},
		{
			in{[]int{2, 7, 11, 15}, 9},
			[]int{0, 1},
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := twoSum(tt.in.arg1, tt.in.arg2)
			sort.Ints(got)
			sort.Ints(tt.out)

			if !cmp.Equal(got, tt.out) {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
