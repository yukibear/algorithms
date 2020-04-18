export default function numJewelsInStones(
  jewelChars: string,
  stoneChars: string
): number {
  const jewelSet = new Set(jewelChars);
  return stoneChars.split("").filter(stoneChar => jewelSet.has(stoneChar))
    .length;
}
