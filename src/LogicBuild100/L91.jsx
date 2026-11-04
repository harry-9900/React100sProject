import React from 'react'

const L91 = () => {
    const numbers = [2, 7, 11, 15];
    const target = 9;
    const twoSum = (nums, tar) => {
        const numMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            const complement = tar - nums[i];
            if (numMap.has(complement)) {
                return [numMap.get(complement), i];
            }
            numMap.set(nums[i], i);
        }
        return null;
    };
    const result = twoSum(numbers, target);
  return (
    <div>
      <h1>Two Sum Problem সমাধান করা।</h1>
      <p>Numbers: {numbers.join(', ')}</p>
      <p>Target: {target}</p>
      {result ? (
        <p>Indices: {result.join(', ')}</p>
      ) : (
        <p>No solution found.</p>
      )}
    </div>
  )
}

export default L91
