package main

import (
	"bytes"
	"testing"
)

func Test_run(t *testing.T) {
	t.Parallel()

	b := &bytes.Buffer{}
	writer = b

	run()
	got := b.String()
	want := "Hello World\n"

	if got != want {
		t.Errorf("got %#v want %#v", string(got), want)
	}
}
