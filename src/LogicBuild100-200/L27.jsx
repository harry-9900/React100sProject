import React from 'react'

const L27 = () => {
    const generateSubsets = (arr) => {
        const subsets = [];
        const n = arr.length;

        for (let i = 0; i < (1 << n); i++) {
            const subset = [];
            for (let j = 0; j < n; j++) {
                if (i & (1 << j)) {
                    subset.push(arr[j]);
                }
            }
            subsets.push(subset);
        }

        return subsets;
    };

    const array = [1, 2, 3];
    const subsets = generateSubsets(array);

    return (
        <div>
            <h1>Array-এর সব Subset তৈরি করো।</h1>
            <p>Array: {JSON.stringify(array)}</p>
            <p>Subsets: {JSON.stringify(subsets)}</p>
        </div>
    )
}

export default L27
