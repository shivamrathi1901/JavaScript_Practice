/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// To check whether the 2 strings is anagram, we can split the strings and sort them and again join them back,
// Doing this would create a word in sorted order for both the given strings and then we can check whether both the 
// strings are equal or not. If equal return true else false.

var isAnagram = function(s, t) {
    let s_sorted = s.split('').sort().join('');
    let t_sorted = t.split('').sort().join('');
    if(s_sorted == t_sorted){
        return true;
    }
    else{
        return false;
    }
};