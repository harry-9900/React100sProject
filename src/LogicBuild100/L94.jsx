import React from 'react'

const L94 = () => {
    const maxSubArraySum = (arr) => {
        let maxSum = arr[0];
        let currentSum = arr[0];
        for (let i = 1; i < arr.length; i++) {
            currentSum = Math.max(arr[i], currentSum + arr[i]);
            maxSum = Math.max(maxSum, currentSum);
        }
        return maxSum;
    };
  return (
    <div>
      <h1>Maximum Subarray Sum বের করা।</h1>
      <p>Array: [1, 2, 3, 4, 5]</p>
      <p>Maximum Subarray Sum: {maxSubArraySum([1, 2, 3, 4, 5])}</p>
    </div>
  )
}

export default L94
