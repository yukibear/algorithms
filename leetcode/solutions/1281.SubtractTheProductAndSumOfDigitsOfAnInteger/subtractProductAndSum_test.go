package solution

import (
	"testing"
)

func Test_1281_SubtractTheProductAndSumOfDigitsOfAnInteger(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  int
		out int
	}{
		{0, 0},
		{1, 0},
		{999999, 531387},
		{999990, -45},
		{4420, -10},
		{234, 15},
		{4421, 21},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := subtractProductAndSum(tt.in)

			if got != tt.out {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
