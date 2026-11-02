import React from 'react'

const L58 = () => {
    const numbers = [1, 2, 3, 4, 5];
    const maxNumber = Math.max(...numbers);
  return (
    <div>
      <h1>Array-এর Maximum Number বের করা।</h1>
        <p>Maximum Number: {maxNumber}</p>
    </div>
  )
}

export default L58
