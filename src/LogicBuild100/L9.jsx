


import React from 'react'

const L9 = () => {
    const minNumber = [9, 5, 3];
    const minnumber = (numbers) => {
    let minv = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < minv) {
            minv = numbers[i];
        }
    }
    return minv;
  };

  return (
    <div>
      <p>সবচেয়ে ছোট সংখ্যা: {minnumber(minNumber)}</p>
    </div>
  )
}

export default L9

