import React from 'react'

const L35 = () => {
    const fibonacci = (n) => {
    if (n <= 0) return [];
    if (n === 1) return [0];
    
    let fibSeries = [0, 1];
    
    for (let i = 2; i < n; i++) {
        fibSeries.push(fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2]);
    }
    
    return fibSeries;
};

// উদাহরণ: প্রথম ১০টি ফিবোনাচ্চি সংখ্যা বের করা
const N = 10;
const result = fibonacci(N);
  return (
    <div>
      <h1>Fibonacci Series-এর প্রথম Nটি সংখ্যা বের করা।</h1>
        
      <p>প্রথম {N} টি  ফিবোনাচ্চি সংখ্যা: { result.join(" ,")}</p>
    </div>
  )
}

export default L35
