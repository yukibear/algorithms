package solution

import (
	"testing"

	"github.com/google/go-cmp/cmp"
)

func Test_1009_ComplementOfBase10Integer(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  int
		out int
	}{
		{0, 1},
		{5, 2},
		{7, 0},
		{10, 5},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := bitwiseComplement(tt.in)

			if !cmp.Equal(got, tt.out) {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
