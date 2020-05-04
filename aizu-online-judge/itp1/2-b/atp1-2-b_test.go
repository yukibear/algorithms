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
		{"0 1 2", "Yes"},
		{"2 1 0", "No"},
		{"5 5 5", "No"},
		{"0 1 0", "No"},
		{"1 0 1", "No"},
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
