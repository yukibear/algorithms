package solution

import (
	"testing"
)

func Test_1528_ShuffleString(t *testing.T) {
	t.Parallel()

	type in struct {
		arg1 string
		arg2 []int
	}
	tests := []struct {
		in  in
		out string
	}{
		{
			in{"codeleet", []int{4, 5, 6, 7, 0, 2, 1, 3}},
			"leetcode",
		},
		{
			in{"abc", []int{0, 1, 2}},
			"abc",
		},
		{
			in{"aiohn", []int{3, 1, 4, 2, 0}},
			"nihao",
		},
		{
			in{"aaiougrt", []int{4, 0, 2, 6, 7, 3, 1, 5}},
			"arigatou",
		},
		{
			in{"art", []int{1, 0, 2}},
			"rat",
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := restoreString(tt.in.arg1, tt.in.arg2)

			if got != tt.out {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
