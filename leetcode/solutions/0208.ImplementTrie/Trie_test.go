package solution

import (
	"testing"
)

func Test_0208_ImplementTrie(t *testing.T) {
	t.Parallel()

	var got bool
	trie := Constructor()

	trie.Insert("apple")

	got = trie.Search("apple")
	if !got {
		t.Errorf("got %#v want %#v", got, true)
	}

	got = trie.Search("app")
	if got {
		t.Errorf("got %#v want %#v", got, false)
	}

	got = trie.StartsWith("app")
	if !got {
		t.Errorf("got %#v want %#v", got, true)
	}

	trie.Insert("app")
	got = trie.Search("app")
	if !got {
		t.Errorf("got %#v want %#v", got, true)
	}
}
