package solution

import (
	"testing"
)

func Test_1417_ReformatTheString(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  string
		out string
	}{
		{"a0b1c2", "a0b1c2"},
		{"leetcode", ""},
		{"1229857369", ""},
		{"covid2019", "c2o0v1i9d"},
		{"ab123", "1a2b3"},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := reformat(tt.in)

			if got != tt.out {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
