package solution

import "testing"

func Test_0532_KDiffPairsInAnArray(t *testing.T) {
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
			in{[]int{3, 1, 4, 1, 5}, 2},
			2,
		},
		{
			in{[]int{1, 2, 3, 4, 5}, 1},
			4,
		},
		{
			in{[]int{1, 3, 1, 5, 4}, 0},
			1,
		},
		{
			in{[]int{1, 2, 4, 4, 3, 3, 0, 9, 2, 3}, 3},
			2,
		},
		{
			in{[]int{-1, -2, -3}, 1},
			2,
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := findPairs(tt.in.arg1, tt.in.arg2)

			if got != tt.out {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
