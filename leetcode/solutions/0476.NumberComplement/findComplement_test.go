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

func Test_0476_getNumOfDigits(t *testing.T) {
  result := getNumOfDigits(5)
  expected := 3

  if (result != expected) {
    t.Errorf("TEST FAILED! got: %#v, want: %#v.", result, expected)
  }

  result = getNumOfDigits(1)
  expected = 1

  if (result != expected) {
    t.Errorf("TEST FAILED! got: %#v, want: %#v.", result, expected)
  }
}

func Test_0476_pow(t *testing.T) {
  result := pow(2, 5)
  expected := 32

  if (result != expected) {
    t.Errorf("TEST FAILED! got: %#v, want: %#v.", result, expected)
  }

  result = pow(2, 1)
  expected = 2

  if (result != expected) {
    t.Errorf("TEST FAILED! got: %#v, want: %#v.", result, expected)
  }
}
