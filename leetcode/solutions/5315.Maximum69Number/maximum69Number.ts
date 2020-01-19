export default function maximum69Number(num: number): number {
  const numOfDigits = Math.floor(Math.log10(num)) + 1;
  let restNum = num;

  for (let i = numOfDigits - 1; i >= 0; i--) {
    let base = 10 ** i;

    if (Math.floor(restNum / base)  === 6) {
      num += 3 * base;
      break;
    }

    restNum = restNum % base;
  }

  return num;
}
