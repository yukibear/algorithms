package solution

import (
	"testing"
)

func Test_0155_MinStack(t *testing.T) {
	minStack := Constructor()
	minStack.Push(-2)
	minStack.Push(0)
	minStack.Push(-3)
	got := minStack.GetMin()
	want := -3
	if got != want {
		t.Errorf("got %#v want %#v", got, want)
	}
	minStack.Pop()
	got = minStack.Top()
	want = 0
	if got != want {
		t.Errorf("got %#v want %#v", got, want)
	}
	got = minStack.GetMin()
	want = -2
	if got != want {
		t.Errorf("got %#v want %#v", got, want)
	}
}
