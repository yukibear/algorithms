package solution

import "math"

func findComplement(num int) int {
  if num == 0 {
    return 0
  }

  numOfDigits := math.Floor(math.Log2(float64(num))) + 1

  return num ^ int(math.Pow(2, numOfDigits) - 1)
}
