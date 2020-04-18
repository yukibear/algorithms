package solution

import (
	"testing"
)

func Test_0200_NumberOfIslands(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  [][]byte
		out int
	}{
		{
			[][]byte{},
			0,
		},
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
				{'1', '0'},
				{'0', '1'},
			},
			2,
		},
		{
			[][]byte{
				{'1', '0'},
				{'1', '1'},
			},
			1,
		},
		{
			[][]byte{
				{'0', '0'},
				{'0', '1'},
			},
			1,
		},
		{
			[][]byte{
				{'1', '1', '1', '1', '0'},
				{'1', '1', '0', '1', '0'},
				{'1', '1', '0', '0', '0'},
				{'0', '0', '0', '0', '0'},
			},
			1,
		},
		{
			[][]byte{
				{'1', '1', '0', '0', '0'},
				{'1', '1', '0', '0', '0'},
				{'0', '0', '1', '0', '0'},
				{'0', '0', '0', '1', '1'},
			},
			3,
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := numIslands(tt.in)

			if got != tt.out {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
