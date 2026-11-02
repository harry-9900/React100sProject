import React from 'react'

const L69 = () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [3, 4, 5, 6, 7];
    const commonElements = array1.filter(element => array2.includes(element));
  return (
    <div>
      <h1>দুটি Array-এর Common Elements বের করা।</h1>
      <p>Common Elements: {commonElements.join(', ')}</p>
    </div>
  )
}

export default L69
