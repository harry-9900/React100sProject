import React from 'react'

const L62 = () => {
    const numbers = [1, 2, 3, 4, 5];
    const sorted = [...new Set(numbers)].sort((a, b) => b - a);
    const secondLargest = sorted[1];

  return (
    <div>
      <h1>Array-এর Second Largest Number বের করা।</h1>
      <p>Second Largest: {secondLargest}</p>
    </div>
  )
}

export default L62
