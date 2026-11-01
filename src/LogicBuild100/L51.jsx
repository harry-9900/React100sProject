import React from 'react'

const L51 = () => {
  const reverseString = (str) => {
    return str.split('').reverse().join('');
  }
  return (
    <div>
      <h1>Function দিয়ে String Reverse করা।</h1>
      <p>Reversed "Hello": {reverseString("Hello")}</p>
      <p>Reversed "React": {reverseString("React")}</p>
    </div>
  )
}

export default L51
