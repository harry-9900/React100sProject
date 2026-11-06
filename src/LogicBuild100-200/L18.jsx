import React from 'react'

const L18 = () => {
    const productExceptSelf = (nums) => {
        const length = nums.length;
        const answer = new Array(length).fill(1);

        // Calculate left products
        for (let i = 1; i < length; i++) {
            answer[i] = answer[i - 1] * nums[i - 1];
        }

        // Calculate right products and final result
        let rightProduct = 1;
        for (let i = length - 1; i >= 0; i--) {
            answer[i] *= rightProduct;
            rightProduct *= nums[i];
        }

        return answer;
    };

    const array = [1, 2, 3, 4];
    const result = productExceptSelf(array);

    return (
        <div>
            <h1>Array-এর Product Except Self তৈরি করো।</h1>
            <p>Array: {JSON.stringify(array)}</p>
            <p>Result: {JSON.stringify(result)}</p>
        </div>
    )
}

export default L18
