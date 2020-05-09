package solution

import (
	"testing"

	"github.com/google/go-cmp/cmp"
)

func Test_0367_ValidPerfectSquare(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  int
		out bool
	}{
		{0, true},
		{1, true},
		{3, false},
		{4, true},
		{9, true},
		{15, false},
		{16, true},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := isPerfectSquare(tt.in)

			if !cmp.Equal(got, tt.out) {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
