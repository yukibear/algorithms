package solution

type MinStack struct {
	stack []element
}

type element struct {
	val int
	min int
}

func Constructor() MinStack {
	return MinStack{}
}

func (this *MinStack) Push(x int) {
	this.stack = append(this.stack, element{
		val: x,
		min: this.calcMin(x),
	})
}

func (this *MinStack) Pop() {
	if len(this.stack) > 0 {
		this.stack = this.stack[:len(this.stack)-1]
	}
}

func (this *MinStack) Top() int {
	if len(this.stack) > 0 {
		return this.stack[len(this.stack)-1].val
	}
	return 0
}

func (this *MinStack) GetMin() int {
	return this.stack[len(this.stack)-1].min
}

func (this *MinStack) calcMin(x int) int {
	if len(this.stack) == 0 {
		return x
	}

	currentMin := this.stack[len(this.stack)-1].min

	if currentMin > x {
		return x
	}

	return currentMin
}
