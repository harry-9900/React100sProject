import React from 'react'

const L60 = () => {
    const numbers = [1, 2, 3, 4, 5];
    const evenCount = numbers.filter(n => n % 2 === 0).length;
    const oddCount = numbers.filter(n => n % 2 !== 0).length;
  return (
    <div>
      <h1>Array-তে জোড় ও বিজোড় সংখ্যা গণনা করা।</h1>
      <p>জোড় সংখ্যা: {evenCount}</p>
      <p>বিজোড় সংখ্যা: {oddCount}</p>
    </div>
  )
}

export default L60
