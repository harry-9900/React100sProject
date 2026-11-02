import React from 'react'

const L57 = () => {
    const numbers = [1, 2, 3, 4, 5];
    const average = numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;

  return (
    <div>
      <h1>Array-এর Average বের করা।</h1>
      <p>Average: {average}</p>
    </div>
  )
}

export default L57
