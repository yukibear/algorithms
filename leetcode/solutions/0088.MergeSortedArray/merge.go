package solution

func merge(nums1 []int, m int, nums2 []int, n int) {
	i := 0

	for j, num := range nums2 {
		for ; i < m; i++ {
			if num < nums1[i] {
				break
			}
		}

		if i == m {
			copy(nums1[m:], nums2[j:])
			return
		}

		copy(nums1[i+1:], nums1[i:])
		nums1[i] = num
		i++
		m++
	}
}
