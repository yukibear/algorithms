package solution

import (
	"sort"
	"testing"

	"github.com/google/go-cmp/cmp"
)

func Test_0599_MinimumIndexSumOfTwoLists(t *testing.T) {
	t.Parallel()

	type in = struct {
		arg1 []string
		arg2 []string
	}
	tests := []struct {
		in  in
		out []string
	}{
		{
			in{
				[]string{"Shogun", "KFC", "Burger King"},
				[]string{"KFC", "Shogun", "Burger King"},
			},
			[]string{"Shogun", "KFC"},
		},
		{
			in{
				[]string{"Shogun", "Tapioca Express", "Burger King", "KFC"},
				[]string{"Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"},
			},
			[]string{"Shogun"},
		},
		{
			in{
				[]string{"Shogun", "Tapioca Express", "Burger King", "KFC"},
				[]string{"KFC", "Shogun", "Burger King"},
			},
			[]string{"Shogun"},
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := findRestaurant(tt.in.arg1, tt.in.arg2)
			sort.Strings(got)
			sort.Strings(tt.out)

			if !cmp.Equal(got, tt.out) {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
