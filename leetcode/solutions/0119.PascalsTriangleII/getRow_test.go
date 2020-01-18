package solution

import (
	"reflect"
	"testing"
)

func Test_0119_PascalsTriangleII(t *testing.T) {

	result := getRow(3)
	expected := []int{1, 3, 3, 1}

	if reflect.DeepEqual(result, expected) {
		t.Errorf("TEST FAILED! got: %#v, want: %#v.", result, expected)
	}

	result = getRow(4)
	expected = []int{1, 4, 6, 4, 1}

	if reflect.DeepEqual(result, expected) {
		t.Errorf("TEST FAILED! got: %#v, want: %#v.", result, expected)

	}

}
