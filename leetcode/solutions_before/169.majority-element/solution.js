// Approach 6 がいい


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let countList = [];
    const threshold = Math.ceil(nums.length / 2);
    for (let i = 0; nums.length > 0; i++) {
        let num = nums[i];
        if (typeof countList[num] === 'undefined') countList[num] = 0;
        countList[num]++;
        if (countList[num] >= threshold) return num;
    }
};
console.log(majorityElement([3, 2, 3]));
