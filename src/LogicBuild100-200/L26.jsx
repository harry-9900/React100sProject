import React from 'react'

const L26 = () => {
    const generateSubarrays = (arr) => {
        const subarrays = [];
        const n = arr.length;

        for (let i = 0; i < n; i++) {
            for (let j = i; j < n; j++) {
                subarrays.push(arr.slice(i, j + 1));
            }
        }

        return subarrays;
    };

    const array = [1, 2, 3];
    const subarrays = generateSubarrays(array);

    return (
        <div>
            <h1>একটি Array-এর সব Subarray তৈরি করো।</h1>
            <p>Array: {JSON.stringify(array)}</p>
            <p>Subarrays: {JSON.stringify(subarrays)}</p>
        </div>
    )
}

export default L26
