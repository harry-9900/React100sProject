import React from 'react'

const L75 = () => {
    const numbers = [1, 2, 3, 4, 5];
    const rotatedNumbers = [...numbers.slice(1), numbers[0]];
  return (
    <div>
      <h1>Array এক ধাপ বাম দিকে Rotate করা।</h1>
      <p>Rotated Numbers: {rotatedNumbers.join(', ')}</p>
    </div>
  )
}

export default L75
