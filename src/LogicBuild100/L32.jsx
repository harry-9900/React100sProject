import React from 'react'

const L32 = () => {
    const Digit = (num) => {
        return num
            .toString()
            .split('')
            .reduce((acc, curr) => acc * Number (curr), 1)
    }
    const numbertest = 525;
    const pritn = Digit(numbertest)
  return (
    <div>
      <h1>সংখ্যার Digit-এর গুণফল বের করা</h1>
      <p>{numbertest}</p>
      <p>{pritn}</p>
    </div>
  )
}

export default L32
