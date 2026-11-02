import React from 'react'

const L71 = () => {
    const numbers = [1, -2, 3, -4, 5, -6];
    const negativeNumbers = numbers.filter(num => num < 0);
  return (
    <div>
      <h1>Array থেকে Negative Numbers আলাদা করা।
</h1>
      <p>Negative Numbers: {negativeNumbers.join(', ')}</p>
    </div>
  )
}

export default L71
