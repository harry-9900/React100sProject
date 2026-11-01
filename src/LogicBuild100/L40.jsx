import React from 'react'

const L40 = () => {
    function isPerfectNumber(n) {
    if (n <= 1) return false; // ১ বা তার ছোট সংখ্যা পারফেক্ট হতে পারে না
    
    let sumOfFactors = 1; // ১ সব সংখ্যারই একটি প্রপার ফ্যাক্টর, তাই ১ দিয়ে শুরু করলাম
    
    // ২ থেকে সংখ্যাটির বর্গমূল (Math.sqrt(n)) পর্যন্ত লুপ চালাবো
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            sumOfFactors += i; // প্রথম ফ্যাক্টর যোগ করা হলো
            
            let pairedFactor = n / i;
            if (pairedFactor !== i) {
                sumOfFactors += pairedFactor; // জোড় ফ্যাক্টরটি যোগ করা হলো
            }
        }
    }
    
    // ফ্যাক্টরগুলোর যোগফল মূল সংখ্যার সমান কিনা তা চেক করা
    return sumOfFactors === n;
}

// উদাহরণ:
const num1 = 28;
const num2 = 12;

  return (
    <div>
      <h1>সংখ্যা Perfect Number কি না পরীক্ষা করা।</h1>
      <p>{num1} কি পারফেক্ট নম্বর? { isPerfectNumber(num1) ? "হ্যাঁ" : "না"} </p>
      <p>{num2} কি পারফেক্ট নম্বর? { isPerfectNumber(num2) ? "হ্যাঁ" : "না"} </p>
    </div>
  )
}

export default L40
