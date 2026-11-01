import React from 'react'

const L18 = () => {
    const squer =  (Number,) => {
        return Number * Number
    }
    const cube =  (Number) => {
        return Number * Number * Number
    }
  return (
    <div>
      <h1>সংখ্যার Square ও Cube বের করা।</h1>
      <p> squer :{squer(5)}</p>
      <p> cube : {cube(5)}</p>
    </div>
  )
}

export default L18
