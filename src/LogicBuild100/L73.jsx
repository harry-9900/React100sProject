import React from 'react'

const L73 = () => {
    const numbers = [1, 0, 2, 0, 3, 0, 4];
    const nonZeroNumbers = numbers.filter(num => num !== 0);
    const zeroCount = numbers.length - nonZeroNumbers.length;
  return (
    <div>
      <h1>Array-এর Zero-গুলো শেষে পাঠানো।</h1>
      <p>Non-Zero Numbers: {nonZeroNumbers.join(', ')}</p>
      <p>Zero Count: {zeroCount}</p>
    </div>
  )
}

export default L73
