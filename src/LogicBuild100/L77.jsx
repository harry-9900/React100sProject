import React from 'react'

const L77 = () => {
    const String = ("Hello, World!");
    const reverseString = String.split("").reverse().join("");
  return (
    <div>
      <p>স্ট্রিং: {String}</p>
      <p>উল্টো স্ট্রিং: {reverseString}</p>
    </div>
  )
}

export default L77
