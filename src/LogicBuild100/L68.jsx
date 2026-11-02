import React from 'react'

const L68 = () => {
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const mergedArray = [...array1, ...array2]; // Merging two arrays
  return (
    <div>
      <h1>দুটি Array Merge করা।</h1>
      <p>Merged Array: {mergedArray.join(', ')}</p>
    </div>
  )
}

export default L68
