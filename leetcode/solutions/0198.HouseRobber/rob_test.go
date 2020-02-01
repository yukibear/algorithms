package solution

import (
	"testing"
)

func Test_0119_PascalsTriangleII(t *testing.T) {

	result := rob([]int{1, 2, 3, 1})
	expected := 4

	if result != expected {
		t.Errorf("TEST FAILED! got: %#v, want: %#v.", result, expected)
	}

	result = rob([]int{2, 7, 9, 3, 1})
	expected = 12

	if result != expected {
		t.Errorf("TEST FAILED! got: %#v, want: %#v.", result, expected)

	}

}
