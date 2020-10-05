export default function bitwiseComplement(N: number): number {
  if (N === 0) {
    return 1;
  }

  let base2 = "";

  for (; N > 0; N = Math.floor(N / 2)) {
    base2 = (N % 2 ^ 1).toString() + base2;
  }

  return parseInt(base2, 2);
}
