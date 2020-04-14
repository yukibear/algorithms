export default function subtractProductAndSum(num: number): number {
  if (num === 0) {
    return 0;
  }

  const numOfDigits = Math.floor(Math.log10(num)) + 1;
  let product = 1;
  let sum = 0;

  for (let i = 0; i < numOfDigits; i++) {
    const rest = num % 10;
    product *= rest;
    sum += rest;
    num = Math.floor(num / 10);
  }

  return product - sum;
}
