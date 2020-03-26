package solution

import "testing"

func Test_1005_MaximizeSumOfArrayAfterKNegations(t *testing.T) {
	t.Parallel()

	type in struct {
		arg1 []int
		arg2 int
	}

	tests := []struct {
		in  in
		out int
	}{
		{in{[]int{4, 2, 3}, 1}, 5},
		{in{[]int{3, -1, 0, 2}, 3}, 6},
		{in{[]int{2, -3, -1, 5, -4}, 2}, 13},
		{in{[]int{5, 6, 9, -3, 3}, 2}, 20},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := largestSumAfterKNegations(tt.in.arg1, tt.in.arg2)

			if got != tt.out {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
