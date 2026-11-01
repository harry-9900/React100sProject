import React from 'react'

const L55 = () => {
  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }

  return (
    <div>
      <h1>Function দিয়ে Leap Year নির্ণয় করা।
</h1>
      <p>2020 is: {isLeapYear(2020) ? 'Leap Year' : 'Not Leap Year'}</p>
      <p>2021 is: {isLeapYear(2021) ? 'Leap Year' : 'Not Leap Year'}</p>
    </div>
  )
}

export default L55
