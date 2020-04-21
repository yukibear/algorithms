package solution

import (
	"testing"

	"github.com/google/go-cmp/cmp"
)

func Test_0122_BestTimeToBuyAndSellStockII(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  []int
		out int
	}{
		{[]int{7, 1, 5, 3, 6, 4}, 7},
		{[]int{1, 2, 3, 4, 5}, 4},
		{[]int{7, 6, 4, 3, 1}, 0},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := maxProfit(tt.in)

			if !cmp.Equal(got, tt.out) {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
