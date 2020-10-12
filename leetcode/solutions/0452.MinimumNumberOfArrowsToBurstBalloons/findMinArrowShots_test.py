import unittest
from findMinArrowShots import Solution


class TestFindMinArrowShots(unittest.TestCase):
    def test_findMinArrowShots(self):
        tests = [
            [
                [[3, 9], [7, 12], [3, 8], [6, 8], [9, 10], [
                    2, 9], [0, 9], [3, 9], [0, 6], [2, 8]],
                2,
            ],
            [
                [[1, 2], [3, 4], [5, 6], [7, 8]],
                4,
            ],
            [
                [[1, 2], [2, 3], [3, 4], [4, 5]],
                2,
            ],
            [
                [[1, 2]],
                1,
            ],
            [
                [[2, 3], [2, 3]],
                1,
            ],
        ]

        s = Solution()

        for input, output in tests:
            assert output == s.findMinArrowShots(input)


if __name__ == '__main__':
    unittest.main()
