package main

import (
	"bufio"
	"fmt"
	"io"
	"os"
	"sort"
	"strconv"
	"strings"
)

var (
	reader io.Reader = os.Stdin
	writer io.Writer = os.Stdout
)

func main() {
	run()
}

func run() {
	scanner := bufio.NewScanner(reader)
	scanner.Scan()
	N, _ := strconv.Atoi(scanner.Text())
	tasks := make([][]int, N+1)

	for i, _ := range tasks {
		tasks[i] = []int{}
	}

	for scanner.Scan() {
		strs := strings.Split(scanner.Text(), " ")
		i, _ := strconv.Atoi(strs[0])
		point, _ := strconv.Atoi(strs[1])

		tasks[i] = append(tasks[i], point)
	}

	for i := 1; i < len(tasks); i++ {
		// Mapでいけるやん
		tasks[i] = append(tasks[i], tasks[i-1]...)
		sort.Sort(sort.Reverse(sort.IntSlice(tasks[i])))

		var sum int
		for j := 0; j < i; j++ {
			sum += tasks[i][j]
		}

		fmt.Fprintln(writer, sum)
	}
	// fmt.Fprintln(writer, strings.Join(ans, " "))
}
