import React from 'react';

const L12 = () => {
    const getDivisorSum = (number) => {
        if (number <= 0) return 0;

        let sum = 0;
        const limit = Math.sqrt(number);

        for (let i = 1; i <= limit; i++) {
            if (number % i === 0) {
                // i হলো একটি ভাজক
                sum += i;

                // N / i হলো অন্য ভাজকটি (যদি দুটি একই না হয়)
                if (i !== number / i) {
                    sum += number / i;
                }
            }
        }

        return sum;
    };

    const num = 36; // যেকোনো সংখ্যা দিতে পারো

    return (
        <div>
            <h1>সংখ্যার Divisors-এর যোগফল</h1>
            <p>সংখ্যাটি: {num}</p>
            <p>Divisors-এর যোগফল: {getDivisorSum(num)}</p>
        </div>
    );
};

export default L12;