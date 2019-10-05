// Approach 6 がいい


let previous = null;
let previousOfPrevious = null;
while (true) {
    const pick = nums[Math.floor(Math.random() * nums.length)];

    if (pick === previous && pick === previousOfPrevious) return pick;

    previousOfPrevious = previous;
    previous = pick;
}


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

let solution = function(nums) {
    let major = num[0];
    let count = 1;
    for(int i=1; i<num.length;i++){
        if(count==0){
            count++;
            major=num[i];
        }else if(major==num[i]){
            count++;
        }else count--;

    }
    return major;
}
console.log(majorityElement([3, 2, 3]));
