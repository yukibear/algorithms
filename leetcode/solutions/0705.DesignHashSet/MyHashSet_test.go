package solution

import (
	"testing"
)

func Test_0705_DesignHashSet(t *testing.T) {
	t.Parallel()

	hashSet := Constructor()
	hashSet.Add(1)
	hashSet.Add(2)

	if !hashSet.Contains(1) {
		t.Errorf("got %#v want %#v", false, true)
	}
	if hashSet.Contains(3) {
		t.Errorf("got %#v want %#v", true, false)
	}

	hashSet.Add(2)

	if !hashSet.Contains(2) {
		t.Errorf("got %#v want %#v", false, true)
	}

	hashSet.Remove(2)

	if hashSet.Contains(2) {
		t.Errorf("got %#v want %#v", true, false)
	}
}
