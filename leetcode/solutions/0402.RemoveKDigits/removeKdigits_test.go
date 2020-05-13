package solution

import (
	"testing"
)

func Test_0402_RemoveKDigits(t *testing.T) {
	t.Parallel()

	type in struct {
		arg1 string
		arg2 int
	}
	tests := []struct {
		in  in
		out string
	}{
		{
			in{
				"1432219",
				3,
			},
			"1219",
		},
		{
			in{
				"10200",
				1,
			},
			"200",
		},
		{
			in{
				"10",
				2,
			},
			"0",
		},
		{
			in{
				"10",
				1,
			},
			"0",
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := removeKdigits(tt.in.arg1, tt.in.arg2)

			if got != tt.out {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
