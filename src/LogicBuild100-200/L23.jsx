import React from 'react'

const L23 = () => {
    const maxArea = (height) => {
        let left = 0;
        let right = height.length - 1;
        let maxArea = 0;

        while (left < right) {
            const currentArea = Math.min(height[left], height[right]) * (right - left);
            maxArea = Math.max(maxArea, currentArea);

            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxArea;
    };

    const array = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    const area = maxArea(array);

    return (
        <div>
            <h1>Array-তে সর্বোচ্চ Water Contain করতে পারে এমন দুটি Line খুঁজে বের করো।
            </h1>
            <p>Array: {JSON.stringify(array)}</p>
            <p>Maximum Area: {area}</p>
        </div>
  )
}

export default L23
