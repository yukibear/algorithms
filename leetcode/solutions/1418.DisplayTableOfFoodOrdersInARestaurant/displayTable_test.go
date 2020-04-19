package solution

import (
	"testing"

	"github.com/google/go-cmp/cmp"
)

func Test_0088_MergeSortedArray(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  [][]string
		out [][]string
	}{
		{
			[][]string{
				{"Laura", "2", "Bean Burrito"},
				{"Jhon", "2", "Beef Burrito"},
				{"Melissa", "2", "Soda"},
			},
			[][]string{
				{"Table", "Bean Burrito", "Beef Burrito", "Soda"},
				{"2", "1", "1", "1"},
			},
		},
		{
			[][]string{
				{"James", "12", "Fried Chicken"},
				{"Ratesh", "12", "Fried Chicken"},
				{"Amadeus", "12", "Fried Chicken"},
				{"Adam", "1", "Canadian Waffles"},
				{"Brianna", "1", "Canadian Waffles"},
			},
			[][]string{
				{"Table", "Canadian Waffles", "Fried Chicken"},
				{"1", "2", "0"},
				{"12", "0", "3"},
			},
		},
		{
			[][]string{
				{"David", "3", "Ceviche"},
				{"Corina", "10", "Beef Burrito"},
				{"David", "3", "Fried Chicken"},
				{"Carla", "5", "Water"},
				{"Carla", "5", "Ceviche"},
				{"Rous", "3", "Ceviche"},
			},
			[][]string{
				{"Table", "Beef Burrito", "Ceviche", "Fried Chicken", "Water"},
				{"3", "0", "2", "1", "0"},
				{"5", "0", "1", "0", "1"},
				{"10", "1", "0", "0", "0"},
			},
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := displayTable(tt.in)

			if !cmp.Equal(got, tt.out) {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
