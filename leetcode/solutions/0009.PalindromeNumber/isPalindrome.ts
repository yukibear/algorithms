export default function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }

  let numOfDigits = Math.floor(Math.log10(x)) + 1;

  for (; numOfDigits > 0; numOfDigits -= 2) {
    const tmp = 10 ** (numOfDigits - 1);
    const leftNum = Math.floor(x / tmp);

    if (x % 10 !== leftNum) {
      return false;
    }

    x = Math.floor(x % tmp / 10);
  }

  return true;
}
