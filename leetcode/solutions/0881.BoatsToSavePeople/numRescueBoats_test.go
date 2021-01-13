package solution

import (
	"testing"
)

func Test_0881_NumRescueBoats(t *testing.T) {
	t.Parallel()

	type in struct {
		arg1 []int
		arg2 int
	}
	tests := []struct {
		in  in
		out int
	}{
		{in{[]int{1, 2}, 3}, 1},
		{in{[]int{3, 2, 2, 1}, 3}, 3},
		{in{[]int{3, 5, 3, 4}, 5}, 4},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := numRescueBoats(tt.in.arg1, tt.in.arg2)

			if got != tt.out {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
