import React from 'react'

const L61 = () => {
  const numbers = [1, 2, 3, 4, 5];
  const targetNumber = 3;
  const found = numbers.includes(targetNumber);

  return (
    <div>
      <h1>Array-তে নির্দিষ্ট সংখ্যা খুঁজে বের করা।</h1>
      <p>সংখ্যা: {targetNumber}</p>
      <p>পাওয়া গেছে: {found ? 'হ্যাঁ' : 'না'}</p>
    </div>
  )
}

export default L61
