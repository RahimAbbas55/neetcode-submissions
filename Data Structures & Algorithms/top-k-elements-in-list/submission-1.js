class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
   topKFrequent(nums, k) {
        const map = new Map();
        const arr = [];

        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        const buckets = new Array(nums.length + 1).fill(null).map(() => []);
        
        for (const [num , freq] of map){
            buckets[freq].push(num);
        }
        const res = [];
        for (let i = buckets.length - 1 ; i >= 0 && res.length < k ; i--){
            for( const num of buckets[i]){
                res.push(num)
                if(res.length === k) break;
            }
        }
        return res;
    }
}
