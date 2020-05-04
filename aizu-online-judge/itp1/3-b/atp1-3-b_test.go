package main

import (
	"bytes"
	"strings"
	"testing"
)

func Test_run(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  string
		out string
	}{
		{
			"3\n5\n11\n7\n8\n19\n0\n",
			"Case 1: 3\nCase 2: 5\nCase 3: 11\nCase 4: 7\nCase 5: 8\nCase 6: 19\n",
		},
	}

	for _, tt := range tests {
		b := &bytes.Buffer{}
		writer = b
		reader = strings.NewReader(tt.in)
		run()

		got := b.String()

		if got != tt.out {
			t.Errorf("got %#v want %#v", got, tt.out)
		}
	}
}
