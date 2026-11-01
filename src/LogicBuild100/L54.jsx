import React from 'react'

const L54 = () => {
  const calculateAverage = (a, b, c) => {
    return (a + b + c) / 3;
  }

  return (
    <div>
      <h1>Function দিয়ে তিনটি সংখ্যার Average বের করা।</h1>
      <p>Average of 5, 10, 15:|   {calculateAverage(5, 10, 15).toFixed(2)}</p>
      <p>Average of 20, 30, 40:| {calculateAverage(20, 30, 40).toFixed(2)}</p>
    </div>
  )
}

export default L54
