import React from 'react'

const L67 = () => {
    const numbers = [5, 2, 9, 1, 5, 6];
    const sortedNumbersDescending = [...numbers].sort((a, b) => b - a); // Descending order
  return (
    <div>
      <h1>Array Descending Order-এ Sort করা।</h1>
      <p>Sorted Numbers (Descending): {sortedNumbersDescending.join(', ')}</p>
    </div>
  )
}

export default L67
