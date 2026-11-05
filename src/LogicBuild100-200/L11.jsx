import React from 'react'

const L11 = () => {
    const countDivisors = (number) => {
        let count = 0;
        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                count++;
            }
        }
        return count;
    };

    const number = 12;
    const divisors = countDivisors(number);

    return (
        <div>
            <h1>একটি সংখ্যার Divisor Count বের করো।</h1>
            <p>Number: {number}</p>
            <p>Divisors: {divisors}</p>
        </div>
    )
}

export default L11
