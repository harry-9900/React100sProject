import React from 'react'

const L28 = () => {
    const generatePermutations = (arr) => {
        const results = [];

        const permute = (current, remaining) => {
            if (remaining.length === 0) {
                results.push(current);
                return;
            }

            for (let i = 0; i < remaining.length; i++) {
                const newCurrent = [...current, remaining[i]];
                const newRemaining = [...remaining.slice(0, i), ...remaining.slice(i + 1)];
                permute(newCurrent, newRemaining);
            }
        };

        permute([], arr);
        return results;
    };

    const array = [1, 2, 3];
    const permutations = generatePermutations(array);

    return (
        <div>
            <h1>Array-এর Permutations তৈরি করো।</h1>
            <p>Array: {JSON.stringify(array)}</p>
            <p>Permutations: {JSON.stringify(permutations)}</p>
        </div>
    )
}

export default L28
