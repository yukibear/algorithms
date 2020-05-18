package main

import (
	"bufio"
	"fmt"
	"io"
	"math"
	"os"
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

	var grid [][]int
	var S []int

	for i := 0; scanner.Scan(); i++ {
		strs := strings.Split(scanner.Text(), "")
		line := make([]int, 0, len(strs))

		for j := 0; j < len(strs); j++ {
			// fmt.Println("#", strs[j])
			switch strs[j] {
			case "S":
				S = []int{i, j}
				line = append(line, 0)
			case "G":
				// G = []int{i, j}
				line = append(line, 10)
			default:
				num, _ := strconv.Atoi(strs[j])
				line = append(line, num)
			}
		}

		grid = append(grid, line)
	}

	length := findShortestPath(grid, S[0], S[1], 1, math.MaxInt32)
	fmt.Fprintln(writer, length)
}

func findShortestPath(grid [][]int, i, j, next, min int) int {
	if grid[i][j] == 10 {
		if min > next {
			return next
		}
		return min
	}

	if grid[i][j] != next || next >= 10 {
		return min
	}

	next++

	return minInt(
		findShortestPath(grid, i+1, j, next, min),
		findShortestPath(grid, i-1, j, next, min),
		findShortestPath(grid, i, j+1, next, min),
		findShortestPath(grid, i, j-1, next, min),
	)
}

func minInt(ints ...int) int {
	min := ints[0]

	for i := 1; i < len(ints); i++ {
		if min > ints[i] {
			min = ints[i]
		}
	}

	return min
}
