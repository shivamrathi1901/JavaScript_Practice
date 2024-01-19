/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const groupedAnagrams = {};
    // console.log(tempstrs);
    for (const str of strs) {
        // Sort the characters of the string to identify anagrams
        const sortedStr = str.split('').sort().join('');
        
        // Check if the sorted string is already in the hashmap
        // If not, add it as a key and initialize it with an empty array
        if (groupedAnagrams[sortedStr]) {
            groupedAnagrams[sortedStr].push(str);
        } else {
            groupedAnagrams[sortedStr] = [str];
        }
    }
    
    // Convert the values of the hashmap (arrays of anagrams) into a result array
    const result = Object.values(groupedAnagrams);
    return result;
};