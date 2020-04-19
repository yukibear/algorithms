package solution

import (
	"testing"
)

func Test_0119_PascalsTriangleII(t *testing.T) {
	t.Parallel()

	type in struct {
		arg1 string
		arg2 string
	}
	tests := []struct {
		in  in
		out bool
	}{
		{in{"", ""}, true},
		{in{"#a", "##b"}, false},
		{in{"#", "####"}, true},
		{in{"###a#a", "b#a"}, true},
		{in{"###a#a", "a#b"}, false},
		{in{"ab#c", "ad#c"}, true},
		{in{"ab##", "c#d#"}, true},
		{in{"a##c", "#a#c"}, true},
		{in{"a#c", "b"}, false},
		{in{"bxj##tw", "bxo#j##tw"}, true},
		{in{"bbbextm", "bbb#extm"}, false},
		{in{"ab#c", "ad#c"}, true},
		{in{"nzp#o#g", "b#nzp#o#g"}, true},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := backspaceCompare(tt.in.arg1, tt.in.arg2)

			if got != tt.out {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
