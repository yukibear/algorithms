package solution

import (
	"testing"

	"github.com/google/go-cmp/cmp"
)

func Test_0961_NRepeatedElementInSize2NArray(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  []int
		out int
	}{
		{[]int{1, 2, 3, 3}, 3},
		{[]int{2, 1, 2, 5, 3, 2}, 2},
		{[]int{5, 1, 5, 2, 5, 3, 5, 4}, 5},
	}

	for i, tt := range tests {
		i, tt := i, tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := repeatedNTimes(tt.in)

			if !cmp.Equal(got, tt.out) {
				t.Errorf("\n#%02d\ngot: %#v\nwant: %#v", i, got, tt.out)
			}
		})
	}
}
