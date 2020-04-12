package solution

import (
	"testing"
)

func Test_0771_JewelsAndStones(t *testing.T) {
	t.Parallel()
	type in struct {
		arg1 string
		arg2 string
	}
	tests := []struct {
		in  in
		out int
	}{
		{in{"", ""}, 0},
		{in{"a", "a"}, 1},
		{in{"a", "A"}, 0},
		{in{"A", "aaAA"}, 2},
		{in{"A", "AAaa"}, 2},
		{in{"aA", "aAAbbbb"}, 3},
		{in{"z", "ZZ"}, 0},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := numJewelsInStones(tt.in.arg1, tt.in.arg2)

			if got != tt.out {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
