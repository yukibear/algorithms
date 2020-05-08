package solution

func checkStraightLine(coordinates [][]int) bool {
	if len(coordinates) < 2 {
		return false
	}

	x1, y1 := float64(coordinates[0][0]), float64(coordinates[0][1])
	x2, y2 := float64(coordinates[1][0]), float64(coordinates[1][1])

	for i := 2; i < len(coordinates); i++ {
		x3, y3 := float64(coordinates[i][0]), float64(coordinates[i][1])

		if (y3-y1)/(x3-x1) != (y3-y2)/(x3-x2) {
			return false
		}
	}

	return true
}
