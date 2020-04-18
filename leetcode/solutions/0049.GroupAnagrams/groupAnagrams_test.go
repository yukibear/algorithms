package solution

import (
	"sort"
	"strings"
	"testing"

	"github.com/google/go-cmp/cmp"
)

type sortStrings [][]string

func (s sortStrings) Len() int {
	return len(s)
}

func (s sortStrings) Less(i, j int) bool {
	strs1, strs2 := s[i], s[j]

	if len(strs1) != len(strs2) {
		return len(strs1) < len(strs2)
	}

	if len(strs1) == 0 {
		return false
	}

	for k := 0; k < len(strs1[k]); k++ {
		compare := strings.Compare(strs1[k], strs2[k])
		if compare != 0 {
			return compare < 0
		}
	}

	return false
}

func (s sortStrings) Swap(i, j int) {
	s[i], s[j] = s[j], s[i]
}

func Test_0049_GroupAnagrams(t *testing.T) {
	t.Parallel()

	tests := []struct {
		in  []string
		out [][]string
	}{
		{
			[]string{"eat", "tea", "tan", "ate", "nat", "bat"},
			[][]string{
				[]string{"ate", "eat", "tea"},
				[]string{"nat", "tan"},
				[]string{"bat"},
			},
		},
	}

	for _, tt := range tests {
		tt := tt

		t.Run("Test", func(t *testing.T) {
			t.Parallel()

			got := groupAnagrams(tt.in)

			for _, arr := range got {
				sort.Strings(arr)
			}
			for _, arr := range tt.out {
				sort.Strings(arr)
			}

			sort.Sort(sortStrings(got))
			sort.Sort(sortStrings(tt.out))

			if !cmp.Equal(got, tt.out) {
				t.Errorf("got %#v want %#v", got, tt.out)
			}
		})
	}
}
