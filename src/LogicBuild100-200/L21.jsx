import React from 'react'

const L21 = () => {
    const findMedianSortedArrays = (nums1, nums2) => {
        const merged = [...nums1, ...nums2].sort((a, b) => a - b);
        const mid = Math.floor(merged.length / 2);
        if (merged.length % 2 === 0) {
            return (merged[mid - 1] + merged[mid]) / 2;
        } else {
            return merged[mid];
        }
    };

    const array1 = [1, 3];
    const array2 = [2];
    const median = findMedianSortedArrays(array1, array2);

    return (
        <div>
            <h1>দুটি Sorted Array থেকে Median বের করো।</h1>
            <p>Array 1: {JSON.stringify(array1)}</p>
            <p>Array 2: {JSON.stringify(array2)}</p>
            <p>Median: {median}</p>
        </div>
    )
}

export default L21
