package solution

import "testing"


func Test_1137_NthTribonacciNumber(t *testing.T) {
	result := tribonacci(4)
	expected := 4

	if result != expected {
		t.Errorf("TEST FAILED! got: %#v, want: %#v.", result, expected)
	}

	result = tribonacci(25)
	expected = 1389537

	if result != expected {
		t.Errorf("TEST FAILED! got: %#v, want: %#v.", result, expected)
	}
}
