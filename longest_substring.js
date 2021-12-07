var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let left = 0;
    let right = 0;
    let set = new Set();

    while(right < s.length) {
        if(!set.has(s.charAt(right))){
            set.add(s.charAt(right))
            longest = Math.max(set.size, longest)
            right++;
        }else{
            set.delete(s.charAt(left));
            left++;
        }
    }
    return longest
};
