import React from 'react'

const L7 = () => {
    const isPrime = (num) => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    const countPrimesInRange = (start, end) => {
        let count = 0;
        for (let i = start; i <= end; i++) {
            if (isPrime(i)) {
                count++;
            }
        }
        return count;
    };

    const start = 10;
    const end = 20;
    const primeCount = countPrimesInRange(start, end);

    return (
        <div>
            <h1>দুটি সংখ্যার মধ্যে কতটি Prime Number আছে তা গণনা করো।</h1>
            <p>Range: {start} to {end}</p>
            <p>Prime Count: {primeCount}</p>
        </div>
    )
}

export default L7
