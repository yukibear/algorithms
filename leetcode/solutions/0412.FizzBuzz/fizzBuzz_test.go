package solution

import (
	"testing"

	"github.com/google/go-cmp/cmp"
)

func Test_0412_FizzBuzz(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  int
		out []string
	}{
		{
			15,
			[]string{
				"1",
				"2",
				"Fizz",
				"4",
				"Buzz",
				"Fizz",
				"7",
				"8",
				"Fizz",
				"Buzz",
				"11",
				"Fizz",
				"13",
				"14",
				"FizzBuzz",
			},
		},
	}

	for i, tt := range tests {
		i, tt := i, tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := fizzBuzz(tt.in)

			if !cmp.Equal(got, tt.out) {
				t.Errorf("\n#%02d\ngot: %#v\nwant: %#v", i, got, tt.out)
			}
		})
	}
}
