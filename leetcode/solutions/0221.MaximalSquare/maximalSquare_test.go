package solution

import (
	"testing"
)

func Test_0221_MaximalSquare(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  [][]byte
		out int
	}{
		{
			[][]byte{
				{'0'},
			},
			0,
		},
		{
			[][]byte{
				{'1'},
			},
			1,
		},
		{
			[][]byte{
				{'1', '1'},
			},
			1,
		},
		{
			[][]byte{
				{'1', '0', '1', '0', '0'},
				{'1', '0', '1', '1', '1'},
				{'1', '1', '1', '1', '1'},
				{'1', '0', '0', '1', '0'},
			},
			4,
		},
		{
			[][]byte{
				{'1', '0', '1', '0'},
				{'1', '0', '1', '1'},
				{'1', '0', '1', '1'},
				{'1', '1', '1', '1'},
			},
			4,
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := maximalSquare(tt.in)

			if got != tt.out {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
