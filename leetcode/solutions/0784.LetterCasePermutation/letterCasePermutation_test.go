package solution

import (
	"sort"
	"testing"

	"github.com/google/go-cmp/cmp"
)

func Test_0784_LetterCasePermutation(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  string
		out []string
	}{
		{
			"12345",
			[]string{"12345"},
		},
		{
			"3z4",
			[]string{"3z4", "3Z4"},
		},
		{
			"a1b2",
			[]string{"a1b2", "a1B2", "A1b2", "A1B2"},
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := letterCasePermutation(tt.in)
			sort.Strings(got)
			sort.Strings(tt.out)

			if !cmp.Equal(got, tt.out) {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
