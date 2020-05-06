package solution

import "testing"

func Test_0387_FirstUniqueCharacterInAString(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  string
		out int
	}{
		{
			"leetcode",
			0,
		},
		{
			"loveleetcode",
			2,
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := firstUniqChar(tt.in)

			if got != tt.out {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
