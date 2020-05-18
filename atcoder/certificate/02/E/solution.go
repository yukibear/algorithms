package main

import (
	"bufio"
	"fmt"
	"io"
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
	// N, _ := strconv.Atoi(scanner.Text())
	scanner.Scan()
	strs := strings.Split(scanner.Text(), " ")
	nums := make([]int, len(strs)+1)

	for i, str := range strs {
		nums[i+1], _ = strconv.Atoi(str)
	}

	ans := make([]string, 0, len(strs))

	for i := 1; i < len(nums); i++ {
		j := 1
		index := nums[i]

		for ; index != i; j++ {
			index = nums[index]
		}

		ans = append(ans, strconv.Itoa(j))
	}

	fmt.Fprintln(writer, strings.Join(ans, " "))
}
