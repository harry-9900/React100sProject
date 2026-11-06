import React from 'react'

const L25 = () => {
    const maxProduct = (nums) => {
        if (nums.length === 0) return 0;
        let maxProduct = nums[0];
        let minProduct = nums[0];
        let result = nums[0];

        for (let i = 1; i < nums.length; i++) {
            const current = nums[i];
            const tempMax = Math.max(current, maxProduct * current, minProduct * current);
            const tempMin = Math.min(current, maxProduct * current, minProduct * current);

            maxProduct = tempMax;
            minProduct = tempMin;
            result = Math.max(result, maxProduct);
        }

        return result;
    };

    const array = [2, 3, -2, 4];
    const product = maxProduct(array);

    return (
        <div>
            <h1>Array-তে Subarray-এর সর্বোচ্চ Product বের করো।</h1>
            <p>Array: {JSON.stringify(array)}</p>
            <p>Maximum Product: {product}</p>
        </div>
    )
}

export default L25
