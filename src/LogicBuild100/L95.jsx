import React from 'react'

const L95 = () => {
    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    const totalSum = matrix.reduce((sum, row) => sum + row.reduce((rowSum, num) => rowSum + num, 0), 0);
  return (
    <div>
      <h1>Matrix-এর সব সংখ্যার যোগফল বের করা।</h1>
      <p>Matrix: {JSON.stringify(matrix)}</p>
      <p>Total Sum: {totalSum}</p>
    </div>
  )
}

export default L95
