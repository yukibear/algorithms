package solution

import (
	"testing"

	"github.com/google/go-cmp/cmp"
)

func Test_1365_HowManyNumbersAreSmallerThanTheCurrentNumber(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  []int
		out []int
	}{
		{[]int{8, 1, 2, 2, 3}, []int{4, 0, 1, 1, 3}},
		{[]int{6, 5, 4, 8}, []int{2, 1, 0, 3}},
		{[]int{7, 7, 7, 7}, []int{0, 0, 0, 0}},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := smallerNumbersThanCurrent(tt.in)

			if !cmp.Equal(got, tt.out) {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
