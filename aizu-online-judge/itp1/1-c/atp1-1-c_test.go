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
		{"3 5", "15 16"},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			b := &bytes.Buffer{}
			writer = b
			reader = strings.NewReader(tt.in)
			run()

			got := strings.TrimSpace(b.String())

			if got != tt.out {
				t.Errorf("got %#v want %#v", string(got), tt.out)
			}
		})
	}

}
