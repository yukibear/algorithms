export default function maximum69Number(num: number): number {
  const numOfDigits = Math.floor(Math.log10(num)) + 1;
  let restNum = num;

  for (let i = numOfDigits - 1; i >= 0; i--) {
    let digit = 10 ** i;

    if (Math.floor(restNum / digit) === 6) {
      num += 3 * digit;
      break;
    }

    restNum = restNum % digit;
  }

  return num;
}
