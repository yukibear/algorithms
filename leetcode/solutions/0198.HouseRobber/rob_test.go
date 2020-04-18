package solution

import (
	"testing"
)

func Test_0198_HouseRobber(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  []int
		out int
	}{
		{
			[]int{1, 2, 3, 1},
			4,
		},
		{
			[]int{2, 7, 9, 3, 1},
			12,
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := rob(tt.in)

			if got != tt.out {
				t.Errorf("got %#v want  %#v", got, tt.out)
			}
		})
	}
}
