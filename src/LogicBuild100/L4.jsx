import React from 'react';

const L4 = () => {
    let numbers = [];

    // ১ থেকে ১০০ পর্যন্ত সংখ্যাগুলো অ্যারেতে পুশ করা হচ্ছে
    for (let i = 1; i <= 100; i++) {
        numbers.push(i);
    }

    return (
        <div>
            <h2>১ থেকে ১০০ পর্যন্ত তালিকা:</h2>
            <ul>
                {numbers.map((num) => (
                    <li key={num}>{num}</li>
                ))}
            </ul>
        </div>
    );
};

export default L4;