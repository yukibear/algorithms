package solution

import (
	"testing"
)

func Test_0383_RansomNote(t *testing.T) {
	t.Parallel()

	type in struct {
		arg1 string
		arg2 string
	}
	tests := []struct {
		in  in
		out bool
	}{
		{
			in{"a", "b"},
			false,
		},
		{
			in{"aa", "ab"},
			false,
		},
		{
			in{"aa", "aab"},
			true,
		},
		{
			in{"abc", "aab"},
			false,
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := canConstruct(tt.in.arg1, tt.in.arg2)

			if got != tt.out {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
