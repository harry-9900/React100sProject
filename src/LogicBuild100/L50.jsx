import React from 'react'

const L50 = () => {
    const isPrime = (num) => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    return (
        <div>
            <h1>Function দিয়ে Prime Number পরীক্ষা করা </h1>
            <p>Number 11 is: {isPrime(11) ? 'Prime' : 'Not Prime'}</p>
            <p>Number 15 is: {isPrime(15) ? 'Prime' : 'Not Prime'}</p>
        </div>
    )
}

export default L50
