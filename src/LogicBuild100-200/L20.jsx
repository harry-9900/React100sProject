import React from 'react'

const L20 = () => {
    const threeSum = (nums) => {
        const result = [];
        nums.sort((a, b) => a - b);
        for (let i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            let left = i + 1;
            let right = nums.length - 1;
            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];
                if (sum === 0) {
                    result.push([nums[i], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return result;
    };

    const array = [-1, 0, 1, 2, -1, -4];
    const threeSumResult = threeSum(array);

    return (
        <div>
            <h1>Array-তে এমন তিনটি সংখ্যার Pair খুঁজে বের করো যাদের যোগফল Zero (Three Sum)।</h1>
            <p>Array: {JSON.stringify(array)}</p>
            <p>Three Sum Result: {JSON.stringify(threeSumResult)}</p>
        </div>
    )
}

export default L20
