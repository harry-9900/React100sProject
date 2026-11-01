import React from 'react'

const L30 = () => {
    const digit = (n)=> {
        if(n === 0) return 1;
        n = Math.abs(n)

        return Math.floor(Math.log10(n)) + 1
    }
    console.log(digit(4528));

  return (
    <div>
      <h1>একটি সংখ্যার Digit সংখ্যা গণনা করা</h1>
      <p>{ digit(4528)}</p>
    </div>
  )
}

export default L30
