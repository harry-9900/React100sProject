import React from 'react'

const L64 = () => {
    const numbers = [1, 2, 3, 4, 5, 3, 2];
    const uniqueNumbers = [...new Set(numbers)];
  return (
    <div>
      <h1>Array থেকে Duplicate Element বাদ দেওয়া।</h1>
      <p>Unique Numbers: {uniqueNumbers.join(', ')}</p>
    </div>
  )
}

export default L64
