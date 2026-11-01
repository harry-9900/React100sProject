import React from 'react'

const L29 = () => {
   const getPrime = (number)=> {
    const isPime = new Array(number + 1).fill(true);
    isPime[0] = false;
    isPime[1] = false;

    const limit = Math.floor(Math.sqrt(number));
    for(let i = 2; i <= limit; i++) {
        if(isPime[i]) {
            for (let j = i * i; j <= number; j += i) {
                isPime[j] = false
            }
        }
    }

    const prime = []
    for(let i = 2; i <= number; i++) {
        if(isPime[i]) prime.push(i);
    }
    return prime
   }
   
  return (
    <div>
      <h1>১ থেকে N পর্যন্ত সব Prime সংখ্যা বের করা।</h1>
      <p>{getPrime(50).join(" , ")}</p>
    </div>
  )
}

export default L29
