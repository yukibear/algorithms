package solution

import (
	"testing"

	"github.com/google/go-cmp/cmp"
)

func Test_0345_ReverseVowelsOfAString(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  string
		out string
	}{
		{"hello", "holle"},
		{"leetcode", "leotcede"},
		{"aA", "Aa"},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := reverseVowels(tt.in)

			if !cmp.Equal(got, tt.out) {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
