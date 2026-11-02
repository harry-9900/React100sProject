import React from 'react'

const L59 = () => {
    const numbers = [1, 2, 3, 4, 5];
    const minNumber = Math.min(...numbers);
  return (
    <div>
      <h1>Array-এর Minimum Number বের করা।</h1>
      <p>Minimum Number: {minNumber}</p>
    </div>
  )
}

export default L59
