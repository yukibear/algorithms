package solution

import "testing"

func Test_0746_MinCostStaiers(t *testing.T) {
	result := minCostClimbingStairs([]int{10, 15, 20})
	expected := 15

	if result != expected {
		t.Errorf("TEST FAILED! got: %#v, want: %#v.", result, expected)
	}

	result = minCostClimbingStairs([]int{1, 100, 1, 1, 1, 100, 1, 1, 100, 1})
	expected = 6

	if result != expected {
		t.Errorf("TEST FAILED! got: %#v, want: %#v.", result, expected)
	}
}
