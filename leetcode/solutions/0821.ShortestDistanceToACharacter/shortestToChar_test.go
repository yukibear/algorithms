package solution

import (
	"testing"

	"github.com/google/go-cmp/cmp"
)

func Test_0821_ShortestDistanceToACharacter(t *testing.T) {
	t.Parallel()

	type in struct {
		arg1 string
		arg2 byte
	}

	tests := []struct {
		in  in
		out []int
	}{
		{in{"loveleetcode", 'e'}, []int{3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0}},
	}

	for i, tt := range tests {
		i := i
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := shortestToChar(tt.in.arg1, tt.in.arg2)

			if !cmp.Equal(got, tt.out) {
				t.Errorf("\n#%02d\ngot: %#v\nwant: %#v", i, got, tt.out)
			}
		})
	}
}
