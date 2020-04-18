package solution

const WATER = '0'
const LAND = '1'

func numIslands(grid [][]byte) int {
	var count int

	for i := 0; i < len(grid); i++ {
		for j := 0; j < len(grid[i]); j++ {
			if grid[i][j] == LAND {
				count++
				deleteIsland(grid, i, j)
			}
		}
	}

	return count
}

func deleteIsland(grid [][]byte, i, j int) {
	if i < 0 || j < 0 || i >= len(grid) || j >= len(grid[i]) || grid[i][j] != LAND {
		return
	}

	grid[i][j] = WATER
	deleteIsland(grid, i, j+1)
	deleteIsland(grid, i, j-1)
	deleteIsland(grid, i+1, j)
	deleteIsland(grid, i-1, j)
}
