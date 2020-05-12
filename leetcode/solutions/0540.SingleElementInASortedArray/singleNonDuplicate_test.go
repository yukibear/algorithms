package solution

import (
	"testing"
)

func Test_0540_SingleElementInASortedArray(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  []int
		out int
	}{
		{
			[]int{1, 1, 2, 3, 3, 4, 4, 8, 8},
			2,
		},
		{
			[]int{3, 3, 7, 7, 10, 11, 11},
			10,
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := singleNonDuplicate(tt.in)

			if got != tt.out {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
