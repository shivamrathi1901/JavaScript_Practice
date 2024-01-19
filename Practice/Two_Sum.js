/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Since there exist only 1 solution, we traverse the array with 1 element at a time and check with the rest of the elements whether
// they form the target or not. If they form the target, print the indexes of the elements.

var twoSum = function(nums, target) {
    for(i=0;i<=nums.length-1;i++){
        for(j=i+1;j<=nums.length;j++){
            if(nums[i]+nums[j] == target){
                return [i,j];
            }
        }
    }
    return false
};