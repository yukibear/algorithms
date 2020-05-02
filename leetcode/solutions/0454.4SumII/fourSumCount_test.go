package solution

import (
	"testing"
)

func Test_0454_4SumII(t *testing.T) {
	t.Parallel()

	type in struct {
		arg1 []int
		arg2 []int
		arg3 []int
		arg4 []int
	}
	tests := []struct {
		in  in
		out int
	}{
		{
			in{
				[]int{1, 2},
				[]int{-2, -1},
				[]int{-1, 2},
				[]int{0, 2},
			},
			2,
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := fourSumCount(tt.in.arg1, tt.in.arg2, tt.in.arg3, tt.in.arg4)

			if got != tt.out {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
