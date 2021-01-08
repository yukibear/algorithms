package solution

import (
	"testing"
)

func Test_0003_LengthOfLongestSubstring(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  string
		out int
	}{
		{"", 0},
		{"bbbbb", 1},
		{"aab", 2},
		{"dvdf", 3},
		{"abcabcbb", 3},
		{"pwwkew", 3},
		{"abcdefg", 7},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := lengthOfLongestSubstring(tt.in)

			if got != tt.out {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
