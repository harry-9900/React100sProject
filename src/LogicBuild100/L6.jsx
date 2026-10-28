import React from 'react'

const L6 = () => {
    const bignumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const BigNum = Math.max(...bignumber);
  return (
    <div>
      <p>{BigNum}</p>
    </div>
  )
}

export default L6
