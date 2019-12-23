package solution

func findComplement(num int) int {
  if num == 0 {
    return 0
  }

  numOfDigits := getNumOfDigits(num)

  return num ^ (pow(2, numOfDigits) - 1)
}

func getNumOfDigits(num int) int {
  numOfDigits := 0

  for num > 0 {
    num /= 2
    numOfDigits++
  }

  return numOfDigits
}

func pow(num, num2 int) int {
  result := num

  for ;num2 > 1; num2-- {
    result *= num
  }

  return result
}
