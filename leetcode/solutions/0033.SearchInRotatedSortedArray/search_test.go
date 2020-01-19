package solution

import "testing"

func Test_0033_SearchInRotatedSortedArray(t *testing.T) {
	result := search([]int{4, 5, 6, 7, 0, 1, 2}, 0)
	expected := 4

	if result != expected {
		t.Errorf("TEST FAILED! got: %#v, want: %#v.", result, expected)
	}

	result = search([]int{4, 5, 6, 7, 0, 1, 2}, 3)
	expected = -1

	if result != expected {
		t.Errorf("TEST FAILED! got: %#v, want: %#v.", result, expected)
	}
}
