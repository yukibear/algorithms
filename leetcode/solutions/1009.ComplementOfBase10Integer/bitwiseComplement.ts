export default function bitwiseComplement(N: number): number {
  return N === 0 ? 1 : (Math.pow(2, Math.floor(Math.log2(N)) + 1) - 1) ^ N;
}
