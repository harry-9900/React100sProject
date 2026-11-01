import React from 'react'

const L15 = () => {
    
    let number = 12345; // উদাহরণ সংখ্যা
    let lasdtDigit = Math.abs(number) % 10; 

  return (
    <div>
      <p>সংখ্যার শেষ Digit বের করা।</p>
      <p>শেষ Digit: {lasdtDigit}</p>
    </div>
  )
}

export default L15
