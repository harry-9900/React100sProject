import React from 'react'

const L70 = () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [4, 5, 6, 7, 8];
    const uniqueElements = [...new Set([...array1, ...array2])]; // Finding unique elements 
  return (
    <div>
      <h1>দুটি Array-এর Unique Elements বের করা।</h1>
      <p>Unique Elements: {uniqueElements.join(', ')}</p>
    </div>
  )
}

export default L70
