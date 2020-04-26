package solution

import (
	"testing"
)

func Test_1143_LongestCommonSubsequence(t *testing.T) {
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
		{in{"a", "b"}, 0},
		{in{"abcde", "ace"}, 3},
		{in{"abc", "abc"}, 3},
		{in{"abc", "def"}, 0},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := longestCommonSubsequence(tt.in.arg1, tt.in.arg2)

			if got != tt.out {
				t.Errorf("got %#v want %#v", string(got), tt.out)
			}
		})
	}
}
