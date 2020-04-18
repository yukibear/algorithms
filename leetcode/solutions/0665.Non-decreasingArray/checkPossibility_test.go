package solution

import (
	"testing"

	"github.com/google/go-cmp/cmp"
)

func Test_0665_NonDecreasingArray(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  []int
		out bool
	}{
		{[]int{4, 2, 3}, true},
		{[]int{4, 2, 1}, false},
		{[]int{3, 4, 2, 3}, false},
	}

	for i, tt := range tests {
		_, tt := i, tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := checkPossibility(tt.in)

			if !cmp.Equal(got, tt.out) {
				t.Errorf("TEST FAILED! got: %#v, want: %#v.", got, tt.out)
			}
		})
	}

}
