package solution

func checkStraightLine(coordinates [][]int) bool {
	if len(coordinates) < 2 {
		return false
	}

	x1, y1 := float64(coordinates[0][0]), float64(coordinates[0][1])
	x2, y2 := float64(coordinates[1][0]), float64(coordinates[1][1])
	prevInc := (y2 - y1) / (x2 - x1)
	x1, y1 = x2, y2

	for i := 2; i < len(coordinates); i++ {
		x2, y2 = float64(coordinates[i][0]), float64(coordinates[i][1])

		inc := (y2 - y1) / (x2 - x1)

		if prevInc != inc {
			return false
		}

		x1, y1, prevInc = x2, y2, inc
	}

	return true
}
