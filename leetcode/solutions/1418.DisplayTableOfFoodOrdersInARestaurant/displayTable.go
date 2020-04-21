package solution

import (
	"sort"
	"strconv"
)

func displayTable(orders [][]string) [][]string {
	foodSet := make(map[string]struct{})
	orderOfTables := make(map[int]map[string]int)

	for _, order := range orders {
		tableNo, _ := strconv.Atoi(order[1])
		food := order[2]
		foodSet[food] = struct{}{}

		if _, ok := orderOfTables[tableNo]; !ok {
			orderOfTables[tableNo] = make(map[string]int)
		}

		orderOfTables[tableNo][food]++
	}

	foods := make([]string, 0, len(foodSet))
	for food := range foodSet {
		foods = append(foods, food)
	}
	tables := make([]int, 0, len(orderOfTables))
	for table := range orderOfTables {
		tables = append(tables, table)
	}
	sort.Strings(foods)
	sort.Ints(tables)

	result := make([][]string, len(orderOfTables)+1)
	result[0] = append([]string{"Table"}, foods...)
	numCol := len(foods) + 1
	foodIndices := make(map[string]int)

	for i, food := range foods {
		foodIndices[food] = i + 1
	}

	for i, table := range tables {
		col := make([]string, numCol)
		col[0] = strconv.Itoa(table)
		order := orderOfTables[table]

		for _, food := range foods {
			if amount, ok := order[food]; ok {
				col[foodIndices[food]] = strconv.Itoa(amount)
			} else {
				col[foodIndices[food]] = "0"
			}
		}

		result[i+1] = col
	}

	return result
}
