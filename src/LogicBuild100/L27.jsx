import React from 'react'

const L27 = () => {
    const factorial = (n)=> {
        if (n < 0) return "Not defined"
        let result = 1; 

        for(let i = 1; i <= n; i++){
           result = result * i
        }
         return result;
    }
    const print = factorial(5)
  return (
    <div>
      <h1>একটি সংখ্যার Factorial বের করা।</h1>
    <p>{print}</p>
    </div>
  )
}

export default L27
