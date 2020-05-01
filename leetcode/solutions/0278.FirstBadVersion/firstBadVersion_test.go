package solution

import "testing"

func Test_0278_FirstBadVersion(t *testing.T) {
	t.Parallel()
	type in struct {
		arg        int
		badVersion int
	}
	tests := []struct {
		in  in
		out int
	}{
		{in{0, 0}, 0},
		{in{1, 1}, 1},
		{in{2, 1}, 1},
		{in{9, 3}, 3},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			FirstBadVersion = tt.in.badVersion
			got := firstBadVersion(tt.in.arg)

			if got != tt.out {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
