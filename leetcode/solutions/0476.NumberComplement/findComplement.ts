export default function findComplement(num: number): number {
  if (num === 0) {
    return 0;
  }

  const numOfDigits = Math.floor(Math.log2(num)) + 1;

  return num ^ (Math.pow(2, numOfDigits) - 1);
}
