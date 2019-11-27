/**
 * @param {number} n
 * @return {string}
 */
export default function convertToTitle(
  n: number
): string {
  const numToAlphabet = (n: number) => {
    return String.fromCharCode(
      Number.parseInt((n + 64).toString(16), 16)
    );
  }

  let result = "";

  do {
    let digit1 = n % 26;
    n = Math.floor(n / 26);
    if (digit1 === 0) {
      digit1 = 26;
      n -= 1;
    }
    result = numToAlphabet(digit1) + result;
  } while (n / 26 > 0);

  return result;
}
