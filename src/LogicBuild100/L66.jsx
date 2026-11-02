import React from 'react'

const L66 = () => {
    const numbers = [5, 2, 9, 1, 5, 6];
    const sortedNumbers = [...numbers].sort((a, b) => a - b); // Ascending order
  return (
    <div>
      <h1>Array Ascending Order-এ Sort করা।</h1>
      <p>Sorted Numbers: {sortedNumbers.join(', ')}</p>
    </div>
  )
}

export default L66
