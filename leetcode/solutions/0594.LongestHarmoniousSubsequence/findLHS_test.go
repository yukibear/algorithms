package solution

import "testing"

func Test_0594_LongestHarmoniousSubsequence(t *testing.T) {
	result := findLHS([]int{1, 3, 2, 2, 5, 2, 3, 7})
	expected := 5

	if result != expected {
		t.Errorf("TEST FAILED! got: %#v, want: %#v.", result, expected)
	}

	result = findLHS([]int{1, 2, 3, 4})
	expected = 2

	if result != expected {
		t.Errorf("TEST FAILED! got: %#v, want: %#v.", result, expected)
	}
}
