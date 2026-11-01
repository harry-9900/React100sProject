import React from 'react'

const L22 = () => {
    const numberrebase = () => {
        let number = []
        for (let i = 100; i >= 1; i--) {
            number.push(i)
        }
        return number
    };

    const numbers = numberrebase();
  return (
    <div>
      <h1>১০০ থেকে ১ পর্যন্ত উল্টোভাবে প্রিন্ট করা।</h1>
      <p>{numbers.join(' , ')}</p>
    </div>
  )
}

export default L22
