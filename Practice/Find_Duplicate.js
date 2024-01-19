/**
 * @param {number[]} nums
 * @return {boolean}
 */

// To check whether the array contains a duplicate, 
// first we can sort the array and then check the next index of the variable "i".
// If the next index value is same as ith index value, then the duplicate exists. 
// Therefore return true.

var containsDuplicate = function (nums) {
    // Sort the given list.
    let sorted = nums.sort();
    // Check in the sorted list whether duplicate exists.
    for (i = 0; i <= sorted.length - 1; i++) {
        if (sorted[i] == sorted[i + 1]) {
            return true;
        }
    }
    return false;
};