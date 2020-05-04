package main

import (
	"bytes"
	"testing"

	"github.com/yukisato/algoutil/atcoder"
)

func Test_run(t *testing.T) {
	t.Parallel()

	b := &bytes.Buffer{}
	rw := &atcoder.IoReadWriter{Writer: b}

	run(rw)
	got := b.String()
	want := "Hello World\n"

	if got != want {
		t.Errorf("got %#v want %#v", string(got), want)
	}
}
