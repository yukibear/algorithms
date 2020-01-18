package solution

import (
	"reflect"
	"testing"
)

func Test_0118_PascalsTriangle(t *testing.T) {
	result := generate(5)
	expected := [][]int{
		{1},
		{1, 1},
		{1, 2, 1},
		{1, 3, 3, 1},
		{1, 4, 6, 4, 1},
	}

	if reflect.DeepEqual(result, expected) {
		t.Errorf("TEST FAILED! got: %#v, want: %#v.", result, expected)
	}
}
