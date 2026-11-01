import React from 'react'

const L33 = () => {
    const numberReverse = (num) => {
        return num
            .toString()
            .split('')
            .reverse()
            .join('')
    }
    let numbertest = 12345;
    let print = numberReverse(numbertest)
  return (
    <div>
      <h1>একটি সংখ্যা Reverse করা।</h1>
      <p>{numbertest}</p>
      <p>{print}</p>
    </div>
  )
}

export default L33
