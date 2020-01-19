package solution

func search(nums []int, target int) int {
	lo := 0
	hi := len(nums) - 1

	for lo < hi {
		mid := (lo + hi) / 2

		if nums[mid] > nums[hi] {
			lo = mid + 1
		} else {
			hi = mid
		}
	}

	rot := lo
	lo = 0
	hi = len(nums) - 1

	for lo <= hi {
		mid := (lo + hi) / 2
		realMid := (mid + rot) % len(nums)

		if nums[realMid] == target {
			return realMid
		}
		if nums[realMid] < target {
			lo = mid + 1
		} else {
			hi = mid - 1
		}
	}

	return -1
}
