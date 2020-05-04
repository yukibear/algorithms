package main

import (
	"bytes"
	"strings"
	"testing"

	"github.com/yukisato/algoutil/atcoder"
)

func Test_main(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  string
		out string
	}{
		{"3 4\n", "Even"},
		{"1 21\n", "Odd"},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			b := &bytes.Buffer{}
			rw := &atcoder.IoReadWriter{Writer: b}
			rw.SetStringAsReader(tt.in)

			run(rw)
			got := strings.TrimSpace(b.String())

			if got != tt.out {
				t.Errorf("got %#v want %#v", string(got), tt.out)
			}
		})
	}
}
