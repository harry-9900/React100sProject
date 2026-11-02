import React from 'react'

const L72 = () => {
    const numbers = [1, -2, 3, -4, 5, -6];
    const positiveNumbers = numbers.filter(num => num > 0);
  return (
    <div>
      <h1>Array থেকে Positive Numbers নিয়ে নতুন Array তৈরি করা।
</h1>
      <p>Positive Numbers: {positiveNumbers.join(', ')}</p>
    </div>
  )
}

export default L72
