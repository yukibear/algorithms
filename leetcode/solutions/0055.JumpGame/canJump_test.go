package solution

import "testing"

func Test_0055_JumpGame(t *testing.T) {
	t.Parallel()
	tests := []struct {
		in  []int
		out bool
	}{
		{[]int{0}, true},
		{[]int{2, 3, 1, 1, 4}, true},
		{[]int{2, 3, 1, 0, 4}, true},
		{[]int{3, 2, 1, 0, 4}, false},
		{[]int{1, 1, 0, 1}, false},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := canJump(tt.in)

			if got != tt.out {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
