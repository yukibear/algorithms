package solution

func search(nums []int, target int) int {
	for l, r := 0, len(nums)-1; l <= r; {
		mid := (l + r) >> 1

		switch {
		case nums[mid] == target:
			return mid
		case nums[mid] < target:
			l = mid + 1
		default:
			r = mid - 1
		}
	}

	return -1
}
