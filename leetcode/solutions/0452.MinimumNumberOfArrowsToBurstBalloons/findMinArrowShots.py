from typing import List

class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        if not points:
            return 0

        points.sort()
        curr_end = points[0][1]
        count = 1

        for start, end in points:
            if start > curr_end:
                count += 1
                curr_end = end
            else:
                curr_end = min(curr_end, end)

        return count
