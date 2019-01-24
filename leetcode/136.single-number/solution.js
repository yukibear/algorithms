function singleNumber(nums) {
  let l = nums.length;
  let result = 0;
  while (l--) {
    result ^= nums[l];
  }
  return result;
}
console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));
console.log(singleNumber([1,0,1]));
