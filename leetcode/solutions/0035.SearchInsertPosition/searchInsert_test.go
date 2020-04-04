package solution

import "testing"

func Test_0035_SearchInsertPosition(t *testing.T) {
	result := searchInsert([]int{1, 3, 5, 6}, 5)
	expected := 2

	if result != expected {
		t.Errorf("TEST FAILED! got: %#v, want: %#v.", result, expected)
	}

	result = searchInsert([]int{1, 3, 5, 6}, 2)
	expected = 1

	if result != expected {
		t.Errorf("TEST FAILED! got: %#v, want: %#v.", result, expected)
	}

	result = searchInsert([]int{1, 3, 5, 6}, 7)
	expected = 4

	if result != expected {
		t.Errorf("TEST FAILED! got: %#v, want: %#v.", result, expected)
	}

	result = searchInsert([]int{1, 3, 5, 6}, 0)
	expected = 0

	if result != expected {
		t.Errorf("TEST FAILED! got: %#v, want: %#v.", result, expected)
	}

}
