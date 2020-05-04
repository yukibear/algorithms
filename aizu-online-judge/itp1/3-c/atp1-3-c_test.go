package main

import (
	"bytes"
	"strings"
	"testing"
)

func Test_run(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  []string
		out []string
	}{
		{
			[]string{
				"3 2",
				"2 2",
				"5 3",
				"0 0",
			},
			[]string{
				"2 3",
				"2 2",
				"3 5",
			},
		},
	}

	for _, tt := range tests {
		b := &bytes.Buffer{}
		writer = b
		reader = strings.NewReader(strings.Join(tt.in, "\n") + "\n")
		run()

		got := b.String()
		want := strings.Join(tt.out, "\n") + "\n"

		if got != want {
			t.Errorf("got %#v want %#v", got, want)
		}
	}
}
