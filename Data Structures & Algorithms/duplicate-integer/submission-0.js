class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const freqMap = new Map();
        for ( let n of nums ){
            if (freqMap.has(n)) return true;
            freqMap.set(n)
        }
        return false
    }
}
