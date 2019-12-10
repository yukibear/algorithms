/**
 * @param {number[]} nums
 * @return {number}
 */
export default function singleNumber(
  nums: number[]
): number {
  let set = new Set<number>();
  nums.map(n => { (set.has(n)) ? set.delete(n) : set.add(n) });
  return set.values().next().value;
}
