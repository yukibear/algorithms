package solution

func merge(nums1 []int, m int, nums2, int[], n int) void {
	i := m - 1
	j := n - 1
	k := m + n - 1

	for i >= 0 && j >= 0 {
		if nums1[i] > nums2[j] {
			nums1[k--] = nums2[i--]
		} else {
			nums1[k--] = nums2[j--]
		}
	}
}