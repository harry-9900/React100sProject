import React from 'react'

const L23 = () => {
   function getSumWithLoop(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i; // sum = sum + i
    }
    return sum;
}

 // উদাহরণ: ১ থেকে ১০০ এর যোগফল হবে ৫০৫০

  return (
    <div>
      <h1>১ থেকে N পর্যন্ত সংখ্যার যোগফল বের করা</h1>
      <p>{getSumWithLoop(100)}</p>
    </div>
  )
}

export default L23
