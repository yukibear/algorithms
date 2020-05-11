package solution

func floodFill(image [][]int, sr int, sc int, newColor int) [][]int {
	oldColor := image[sr][sc]

	if oldColor == newColor {
		return image
	}

	fill(image, sr, sc, newColor, oldColor)

	return image
}

func fill(image [][]int, sr, sc, newColor, oldColor int) {
	if sr < 0 || sc < 0 || sr >= len(image) || sc >= len(image[sr]) || image[sr][sc] != oldColor {
		return
	}

	image[sr][sc] = newColor

	fill(image, sr+1, sc, newColor, oldColor)
	fill(image, sr-1, sc, newColor, oldColor)
	fill(image, sr, sc+1, newColor, oldColor)
	fill(image, sr, sc-1, newColor, oldColor)
}
