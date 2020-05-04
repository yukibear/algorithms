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
		{"5 4 2 2 1", "Yes"},
		{"5 4 2 4 1", "No"},
	}

	for _, tt := range tests {
		b := &bytes.Buffer{}
		writer = b
		reader = strings.NewReader(tt.in)
		run()

		got := strings.TrimSpace(b.String())

		if got != tt.out {
			t.Errorf("got %#v want %#v", string(got), tt.out)
		}
	}
}
