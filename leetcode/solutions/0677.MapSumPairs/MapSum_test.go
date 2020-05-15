package solution

import (
	"testing"
)

func Test_0677_MapSumPairs(t *testing.T) {
	t.Parallel()

	var got, want int

	mapSum := Constructor()
	mapSum.Insert("apple", 3)
	got, want = mapSum.Sum("ap"), 3

	if got != want {
		t.Errorf("got %#v want %#v", got, want)
	}

	mapSum.Insert("app", 2)
	got, want = mapSum.Sum("ap"), 5

	if got != want {
		t.Errorf("got %#v want %#v", got, want)
	}
}
