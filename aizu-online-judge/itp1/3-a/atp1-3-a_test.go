package main

import (
	"bytes"
	"strings"
	"testing"
)

func Test_run(t *testing.T) {
	t.Parallel()

	b := &bytes.Buffer{}
	writer = b
	want := strings.TrimSpace(strings.Repeat("Hello World\n", 1000))
	run()

	got := strings.TrimSpace(b.String())

	if got != want {
		t.Errorf("got %#v want %#v", got, want)
	}
}
