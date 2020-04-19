package solution

// MinStack is a simple stack implementation for LeetCode
type MinStack struct {
	stack []element
}

type element struct {
	val int
	min int
}

// Constructor represents as MinStack's constructor
func Constructor() MinStack {
	return MinStack{}
}

// Push just pushes an element on top of the stack
func (ms *MinStack) Push(x int) {
	ms.stack = append(ms.stack, element{
		val: x,
		min: ms.calcMin(x),
	})
}

// Pop removes the top of the element of the stack
func (ms *MinStack) Pop() {
	if len(ms.stack) > 0 {
		ms.stack = ms.stack[:len(ms.stack)-1]
	}
}

// Top returns the latest value of the stack
func (ms *MinStack) Top() int {
	if len(ms.stack) > 0 {
		return ms.stack[len(ms.stack)-1].val
	}
	return 0
}

// GetMin returns the min value of the stack.
// Operation cost is O(1) because it just returns the pre-calcurated value.
func (ms *MinStack) GetMin() int {
	return ms.stack[len(ms.stack)-1].min
}

func (ms *MinStack) calcMin(x int) int {
	if len(ms.stack) == 0 {
		return x
	}

	currentMin := ms.stack[len(ms.stack)-1].min

	if currentMin > x {
		return x
	}

	return currentMin
}
