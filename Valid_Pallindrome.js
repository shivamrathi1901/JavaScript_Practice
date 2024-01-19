/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // Remove non-alphabetic characters and convert to lowercase
    const cleanStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Check if the clean string is a palindrome
    const length = cleanStr.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        if (cleanStr[i] !== cleanStr[length - 1 - i]) {
            return false;
        }
    }
    return true;
};