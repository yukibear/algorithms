package solution

import (
	"testing"
)

func Test_6004_FirstUniqueNumber(t *testing.T) {
	t.Parallel()

	var firstUnique FirstUnique

	firstUnique = Constructor([]int{2, 3, 5})
	assertEqual(t, firstUnique.ShowFirstUnique(), 2)  // return 2
	firstUnique.Add(5)                                // the queue is now [2,3,5,5]
	assertEqual(t, firstUnique.ShowFirstUnique(), 2)  // return 2
	firstUnique.Add(2)                                // the queue is now [2,3,5,5,2]
	assertEqual(t, firstUnique.ShowFirstUnique(), 3)  // return 3
	firstUnique.Add(3)                                // the queue is now [2,3,5,5,2,3]
	assertEqual(t, firstUnique.ShowFirstUnique(), -1) // return -1

	firstUnique = Constructor([]int{7, 7, 7, 7, 7, 7})
	assertEqual(t, firstUnique.ShowFirstUnique(), -1) // return -1
	firstUnique.Add(7)                                // the queue is now [7,7,7,7,7,7,7]
	firstUnique.Add(3)                                // the queue is now [7,7,7,7,7,7,7,3]
	firstUnique.Add(3)                                // the queue is now [7,7,7,7,7,7,7,3,3]
	firstUnique.Add(7)                                // the queue is now [7,7,7,7,7,7,7,3,3,7]
	firstUnique.Add(17)                               // the queue is now [7,7,7,7,7,7,7,3,3,7,17]
	assertEqual(t, firstUnique.ShowFirstUnique(), 17) // return 17

	firstUnique = Constructor([]int{809})
	assertEqual(t, firstUnique.ShowFirstUnique(), 809) // return 809
	firstUnique.Add(809)                               // the queue is now [809,809]
	assertEqual(t, firstUnique.ShowFirstUnique(), -1)  // return -1
}

func assertEqual(t *testing.T, got, want int) {
	if got != want {
		t.Errorf("got %#v want %#v", got, want)
	}
}
