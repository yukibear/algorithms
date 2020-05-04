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
		{"1 2", "a < b"},
		{"4 3", "a > b"},
		{"5 5", "a == b"},
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
