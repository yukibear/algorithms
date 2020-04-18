package solution

import "testing"

func Test_0476_NumberComplement(t *testing.T) {
	result := findComplement(5)
	expected := 2

	if result != expected {
		t.Errorf("TEST FAILED! got: %#v, want: %#v.", result, expected)
	}

	result = findComplement(1)
	expected = 0

	if result != expected {
		t.Errorf("TEST FAILED! got: %#v, want: %#v.", result, expected)
	}
}
