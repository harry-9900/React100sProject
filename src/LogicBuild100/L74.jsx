import React from 'react'

const L74 = () => {

    const numbers = [1, 2, 3, 5, 6];
    const missingNumber = (arr) => {
        const n = arr.length + 1;
        const expectedSum = (n * (n + 1)) / 2;
        const actualSum = arr.reduce((sum, num) => sum + num, 0);
        return expectedSum - actualSum;
    };
  return (
    <div>
      <h1>Array-এর Missing Number খুঁজে বের করা।</h1>
      <p>Missing Number: {missingNumber(numbers)}</p>
    </div>
  )
}

export default L74
