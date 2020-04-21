package solution

import (
	"testing"

	"github.com/google/go-cmp/cmp"
)

func Test_0678_ValidParenthesisString(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  string
		out bool
	}{
		{"", true},
		{"(", false},
		{")", false},
		{"()", true},
		{"()()", true},
		{")*(", false},
		{"*(()", false},
		{"(*)", true},
		{"(*))", true},
		{"((*)", true},
		{"()*)*)", true},
		{"())", false},
		{"*)**", true},
		{"(*()", true},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := checkValidString(tt.in)

			if !cmp.Equal(got, tt.out) {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
