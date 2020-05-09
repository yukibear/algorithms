package solution

import "testing"

func Test_0169_MajorityElement(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  []int
		out int
	}{
		{
			[]int{3, 2, 3},
			3,
		},
		{
			[]int{2, 2, 1, 1, 1, 2, 2},
			2,
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := majorityElement(tt.in)

			if got != tt.out {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
