class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
    // Init the pointers and final max variable
    let l = 0 , r = heights.length - 1 , max = 0;
    // Run a loop until l > r
    while ( l < r ){
        // Calculate the current area by subtracting the right ptr with left 
        // and multipkying it with the minimum of the value at the left and
        // right ptr.
        let area = (r - l) * Math.min(heights[l] , heights[r]);
        // Update the max variable by assigning it the maximum value between 
        // max and area variable
        max = Math.max(area , max);
        // 
        if ( heights[l] < heights[r] )
            l++;
        else r--;
    }
    return max;
    }
}
