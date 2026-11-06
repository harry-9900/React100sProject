import React from 'react'

const L19 = () => {
    const findClosestPair = (arr, target) => {
        let closestPair = [];
        let closestDiff = Infinity;

        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                const diff = Math.abs(arr[i] + arr[j] - target);
                if (diff < closestDiff) {
                    closestDiff = diff;
                    closestPair = [arr[i], arr[j]];
                }
            }
        }

        return closestPair;
    };

    const array = [1, 2, 3, 4, 5];
    const target = 8;
    const closestPair = findClosestPair(array, target);

    return (
        <div>
            <h1>Array-তে একটি নির্দিষ্ট Target-এর কাছাকাছি দুটি সংখ্যার Pair খুঁজে বের করো।</h1>
            <p>Array: {JSON.stringify(array)}</p>
            <p>Target: {target}</p>
            <p>Closest Pair: {JSON.stringify(closestPair)}</p>
        </div>
    )
}

export default L19
