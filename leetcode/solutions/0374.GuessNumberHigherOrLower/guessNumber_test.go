package solution

import (
	"testing"
)

func Test_0374_GuessNumberHigherOrLower(t *testing.T) {
	t.Parallel()

	var val int

	val = 6
	answer.setAnswer(6)
	got := guessNumber(10)

	if got != val {
		t.Errorf("got %#v want %#v", got, val)
	}
}

type gamesAnswer struct {
	answer int
}

func (g *gamesAnswer) setAnswer(num int) {
	g.answer = num
}

var answer gamesAnswer

// Mock API "guess"
func guess(num int) int {
	switch {
	case answer.answer < num:
		return -1
	case answer.answer > num:
		return 1
	default:
		return 0
	}
}
