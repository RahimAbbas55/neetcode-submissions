class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
         const res = []
    nums.sort( (a , b) => {
        return a - b;
    });

    for ( let i = 0 ; i < nums.length ; i++ ){
        // If duplicates
        if ( i > 0 && nums[i] === nums[i - 1]) continue;
        let st = i + 1 , ed = nums.length - 1;
        while ( st < ed ) {
            let sum = nums[i] + nums[st] + nums[ed];
            if ( sum === 0 ){
                res.push([nums[i]  , nums[st] , nums[ed]]);
                st++; ed--;
                // skip duplicates
                while ( st < ed && nums[st] === nums[st - 1]) st++
                while ( st < ed && nums[ed] === nums[ed + 1]) ed--
            }
            else if ( sum < 0 )
                st++
            else
                ed--;
        }
    }
    return res;
    }
}
