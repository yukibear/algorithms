package solution

import (
	"testing"

	"github.com/google/go-cmp/cmp"
)

func Test_0202_HappyNumber(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  int
		out bool
	}{
		{1, true},
		{0, false},
		{100, true},
		{109, true},
		{19, true},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := isHappy(tt.in)

			if !cmp.Equal(got, tt.out) {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
