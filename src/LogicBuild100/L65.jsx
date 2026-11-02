import React from 'react'

const L65 = () => {
    const numbers = [1, 2, 3, 4, 5, 3, 2];
    const frequency = numbers.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});
  return (
    <div>
      <h1>Array-এর প্রতিটি Element-এর Frequency গণনা করা।</h1>
      <p>Frequency:</p>
      <ul>
        {Object.entries(frequency).map(([num, freq]) => (
          <li key={num}>{num}: {freq}</li>
        ))}
      </ul>
    </div>
  )
}

export default L65
