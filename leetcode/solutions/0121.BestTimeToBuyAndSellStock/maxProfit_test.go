package solution

import (
	"testing"
)

func Test_0121_BestTimeToBuyAndSellStock(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  []int
		out int
	}{
		{[]int{7, 1, 5, 3, 6, 4}, 5},
		{[]int{7, 6, 4, 3, 1}, 0},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := maxProfit(tt.in)

			if got != tt.out {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
