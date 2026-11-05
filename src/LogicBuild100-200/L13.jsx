import React from 'react';

const L13 = () => {
    // ইউক্লিডীয় অ্যালগরিদম (Euclidean Algorithm) ব্যবহার করে GCD বের করার ফাংশন
    const gcd = (a, b) => {
        if (b === 0) {
            return a;
        }
        return gcd(b, a % b);
    };

    // Coprime চেক করার ফাংশন (GCD ১ হলে Coprime)
    const isCoprime = (a, b) => {
        return gcd(a, b) === 1;
    };

    const num1 = 15;
    const num2 = 28;

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h2>দুটি সংখ্যা Coprime (সহমৌলিক) কি না পরীক্ষা</h2>
            <p>সংখ্যা ১: {num1}</p>
            <p>সংখ্যা ২: {num2}</p>
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
                ফলাফল: {isCoprime(num1, num2) ? 'Yes (সংখ্যা দুটি Coprime)' : 'No (সংখ্যা দুটি Coprime নয়)'}
            </p>
        </div>
    );
};

export default L13;