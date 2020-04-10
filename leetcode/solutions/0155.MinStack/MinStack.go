package solution

type MinStack struct {
	Stack []int
}

func Constructor() MinStack {
	return MinStack{}
}

func (this *MinStack) Push(x int) {
	this.Stack = append(this.Stack, x)
}

func (this *MinStack) Pop() {
	if len(this.Stack) > 0 {
		this.Stack = this.Stack[:len(this.Stack)-1]
	}
}

func (this *MinStack) Top() int {
	if len(this.Stack) > 0 {
		return this.Stack[len(this.Stack)-1]
	}
	return 0
}

func (this *MinStack) GetMin() int {
	min := this.Stack[0]

	for i := 1; i < len(this.Stack); i++ {
		if min > this.Stack[i] {
			min = this.Stack[i]
		}
	}

	return min
}
