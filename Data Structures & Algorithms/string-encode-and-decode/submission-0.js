class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if ( strs.length === 0 ) return '';
        let res = [];
        for (let s of strs)
            res.push(String(s.length) , '#' , s);
        return res.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if ( str.length === 0 ) return [];
        let res = [];
        let i = 0;
        while ( i < str.length ){
            let j = i;
            while ( str[j] !== '#' ){
                j++;
            }
            let length = parseInt(str.substring(i , j));
            i = j + 1; j = length + i;
            res.push(str.substring(i , j));
            i = j;
        }
        return res;
    }
}
