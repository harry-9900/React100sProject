import React from 'react'

const L53 = () => {
  const calculateCircleArea = (radius) => {
    return Math.PI * radius * radius;
  }

  return (
    <div>
      <h1>Function দিয়ে Circle-এর ক্ষেত্রফল বের করা।</h1>
      <p>Radius 5: {calculateCircleArea(5).toFixed(2)}</p>
      <p>Radius 10: {calculateCircleArea(10).toFixed(2)}</p>
    </div>
  )
}

export default L53
