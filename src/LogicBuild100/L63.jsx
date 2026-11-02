import React from 'react'

const L63 = () => {
    const numbers = [1, 2, 3, 4, 5];
    const reversed = [...numbers].reverse();
  return (
    <div>
      <h1>Array Reverse করা।</h1>
      <p>Reversed: {reversed.join(', ')}</p>
    </div>
  )
}

export default L63
