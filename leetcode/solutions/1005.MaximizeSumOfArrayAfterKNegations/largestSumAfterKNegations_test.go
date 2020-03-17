package solution

import "testing"

func Test_1005_MaximizeSumOfArrayAfterKNegations(t *testing.T) {
	type In struct {
		a []int
		b int
	}
	type Out struct {
		a int
	}
	cases := []struct {
			in In
			out Out
		}{
			{ In.a{[]int{4,2,3}, 1}, In.b{5}},
			// {{[]int{3,-1,0,2}, 3}, {6}},
			// {{[]int{2,-3,-1,5,-4}, 2}, {13}},
	}

	for i, c := range cases {
		result := largestSumAfterKNegations(c.in[0], c.in[1])

		if result != c.out {
			t.Errorf("\nTest %02d\n[result] %#v\n[expect] %#v", i, result, c.out)
		}
	}
}