package solution

import "testing"

func Test_0404_SumOfLeftLeavest(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  TreeNode
		out int
	}{
		{
			TreeNode{
				3,
				&TreeNode{
					9,
					nil,
					nil,
				},
				&TreeNode{
					20,
					&TreeNode{
						15,
						nil,
						nil,
					},
					&TreeNode{
						7,
						nil,
						nil,
					},
				},
			},
			24,
		},
	}

	for i, tt := range tests {
		i := i
		tt := tt

		t.Run("Test 0404", func(t *testing.T) {
			t.Parallel()

			got := sumOfLeftLeaves(&tt.in)

			if got != tt.out {
				t.Errorf("\n#%02d\ngot: %#v\nwant: %#v", i, got, tt.out)
			}
		})

	}
}
