package solutions

import (
	"testing"
)

func Test_0219_ContainsDuplicateII(t *testing.T) {
	result := containsNearbyDuplicate([]int{99, 99}, 2)
	expected := true

	if result != expected {
		t.Errorf("TEST FAILED! got: %#v, want: %#v.", result, expected)
	}
}
