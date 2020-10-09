import unittest
from search import Solution

class TestSearch(unittest.TestCase):
    def test_search(self):
        s = Solution()

        tests = [
            {
                "input": [[-1, 0, 3, 5, 9, 12], 9],
                "output": 4,
            },
            {
                "input": [[-1, 0, 3, 5, 9, 12], 2],
                "output": -1,
            },
        ]

        for test in tests:
            assert test["output"] == s.search(test["input"][0], test["input"][1])



if __name__ == '__main__':
    unittest.main()
