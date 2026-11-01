import React from 'react'

const L16 = () => {
    const twodigitNumber = (a,b) => {
        return a + b;
    }

  return (
    <div>
      <h1>দুই অঙ্কের সংখ্যার Digit-এর যোগফল বের করা।
</h1>
    <p>{twodigitNumber(20,10)}</p>

    </div>
  )
}

export default L16
