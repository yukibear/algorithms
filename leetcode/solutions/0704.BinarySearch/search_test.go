package solution

import (
	"testing"
)

func Test_0704_BinarySearch(t *testing.T) {
	t.Parallel()

	type in struct {
		arg1 []int
		arg2 int
	}
	tests := []struct {
		in  in
		out int
	}{
		{
			in{[]int{-1, 0, 3, 5, 9, 12}, 9},
			4,
		},
		{
			in{[]int{-1, 0, 3, 5, 9, 12}, 2},
			-1,
		},
		{
			in{[]int{-1, 0, 3, 5, 9, 12}, 9},
			4,
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := search(tt.in.arg1, tt.in.arg2)

			if got != tt.out {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
