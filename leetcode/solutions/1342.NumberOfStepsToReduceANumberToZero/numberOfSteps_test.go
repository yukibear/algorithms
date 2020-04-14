package solution

import (
	"testing"
)

func Test_1342_NumberOfStepsToReduceANumberToZero(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  int
		out int
	}{
		{0, 0},
		{1, 1},
		{2, 2},
		{8388608, 24}, // 8388608 = 2^23
		{14, 6},
		{8, 4},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := numberOfSteps(tt.in)

			if got != tt.out {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
