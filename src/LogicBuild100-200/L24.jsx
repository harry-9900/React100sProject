import React from 'react'

const L24 = () => {
    const trap = (height) => {
        let left = 0;
        let right = height.length - 1;
        let leftMax = 0;
        let rightMax = 0;
        let totalWater = 0;

        while (left < right) {
            if (height[left] < height[right]) {
                if (height[left] >= leftMax) {
                    leftMax = height[left];
                } else {
                    totalWater += leftMax - height[left];
                }
                left++;
            } else {
                if (height[right] >= rightMax) {
                    rightMax = height[right];
                } else {
                    totalWater += rightMax - height[right];
                }
                right--;
            }
        }

        return totalWater;
    };

    const array = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
    const water = trap(array);

    return (
        <div>
            <h1>Array-এর মধ্যে Rain Water Trapping Problem সমাধান করো।</h1>
            <p>Array: {JSON.stringify(array)}</p>
            <p>Trapped Water: {water}</p>
        </div>
    )
}

export default L24
