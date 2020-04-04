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

    x = Math.floor((x % tmp) / 10);
  }

  return true;
}

export function isPalindrome_Str(x: number): boolean {
  if (x < 0) {
    return false;
  }

  const str = x.toString();
  const mid = Math.floor(str.length / 2);

  for (let i = 0; i <= mid; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}
