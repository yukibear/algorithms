package solution

import (
	"testing"
)

func Test_1221_SplitAStringInBalancedStrings(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  string
		out int
	}{
		{"RLRRLLRLRL", 4},
		{"RLLLLRRRLR", 3},
		{"LLLLRRRR", 1},
		{"RLRRRLLRLL", 2},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := balancedStringSplit(tt.in)

			if got != tt.out {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
