package solution

import (
	"testing"

	"github.com/google/go-cmp/cmp"
)

func Test_0136_SingleNumber(t *testing.T) {
	t.Parallel()
	tests := []struct {
		in  []int
		out int
	}{
		{
			[]int{2, 2, 1},
			1,
		},
		{
			[]int{4, 1, 2, 1, 2},
			4,
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := singleNumber(tt.in)

			if !cmp.Equal(got, tt.out) {
				t.Errorf("got %#v want  %#v", got, tt.out)
			}
		})
	}
}
