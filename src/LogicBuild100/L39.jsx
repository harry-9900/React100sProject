import React from 'react'

const L39 = () => {
    function findFactors(n) {
    if (n <= 0) return [];
    
    let factors = [];
    
    // ১ থেকে শুরু করে n এর বর্গমূল (Math.sqrt(n)) পর্যন্ত লুপ চালাবো
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            factors.push(i); // প্রথম গুণনীয়কটি যোগ করা হলো
            
            // যদি i এবং n/i সমান না হয়, তবে জোড় গুণনীয়কটিও যোগ করতে হবে
            let pairedFactor = n / i;
            if (pairedFactor !== i) {
                factors.push(pairedFactor);
            }
        }
    }
    
    // ছোট থেকে বড় ক্রমানুসারে সাজানোর জন্য sort ব্যবহার করা হলো
    factors.sort((a, b) => a - b);
    
    return factors;
}

// উদাহরণ: ৩৬ এর সব ফ্যাক্টর বা গুণনীয়ক বের করা
const number = 36;
const result = findFactors(number);
  return (
    <div>
      <h1>একটি সংখ্যার সব Factor বের করা।</h1>
      <p>{number} এর সব ফ্যাক্টরসমূহ:  {result.join(", ")}</p>
    </div>
  )
}

export default L39
