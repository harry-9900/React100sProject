import React from 'react'

const L29 = () => {
    const countInversions = (arr) => {
        let inversions = 0;
        const n = arr.length;

        for (let i = 0; i < n - 1; i++) {
            for (let j = i + 1; j < n; j++) {
                if (arr[i] > arr[j]) {
                    inversions++;
                }
            }
        }

        return inversions;
    };

    const array = [8, 4, 2, 1];
    const inversionCount = countInversions(array);

    return (
        <div>
            <h1>Array-এর মধ্যে Inversion Count বের করো।</h1>
            <p>Array: {JSON.stringify(array)}</p>
            <p>Inversion Count: {inversionCount}</p>
        </div>
    )
}

export default L29
