import React from 'react';

const L14 = () => {
    // Collatz Sequence তৈরি করার ফাংশন
    const getCollatzSequence = (n) => {
        const sequence = [];
        while (n !== 1 && n > 0) {
            sequence.push(n);
            if (n % 2 === 0) {
                n = n / 2;
            } else {
                n = 3 * n + 1;
            }
        }
        sequence.push(1); // শেষ সংখ্যা ১ অ্যারেতে যুক্ত করা
        return sequence;
    };

    const number = 6;
    const sequence = getCollatzSequence(number);

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1>Collatz Sequence তৈরি করো</h1>
            <p>শুরুর সংখ্যা (Number): {number}</p>
            <p><strong>Collatz Sequence:</strong> {sequence.join(', ')}</p>
            <p>মোট ধাপ সংখ্যা (Steps): {sequence.length - 1}</p>
        </div>
    );
};

export default L14;
