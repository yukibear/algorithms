package solution

import "testing"

func Test_1662_ArrayStringsAreEqual(t *testing.T) {
	t.Parallel()

	type in struct {
		arg1 []string
		arg2 []string
	}

	tests := []struct {
		in  in
		out bool
	}{
		{in{[]string{"a"}, []string{"a"}}, true},
		{in{[]string{"a"}, []string{"b"}}, false},
		{in{[]string{"ab", "c"}, []string{"a", "bc"}}, true},
		{in{[]string{"a", "cb"}, []string{"ab", "c"}}, false},
		{in{[]string{"abc", "d", "defg"}, []string{"abcddefg"}}, true},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := arrayStringsAreEqual(tt.in.arg1, tt.in.arg2)

			if got != tt.out {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
