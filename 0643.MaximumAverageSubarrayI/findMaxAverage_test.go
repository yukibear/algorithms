package solution

import (
	"testing"
)

func Test_0643_MaximumAverageSubarrayI(t *testing.T) {
	var result, expected float64

	result = findMaxAverage([]int{1, 12, -5, -6, 50, 3}, 4)
	expected = 12.75

	if result != expected {
		t.Errorf("TEST FAILED! got: %#v, want: %#v.", result, expected)
	}

	result = findMaxAverage([]int{5}, 1)
	expected = 5.0

	if result != expected {
		t.Errorf("TEST FAILED! got: %#v, want: %#v.", result, expected)
	}
}
