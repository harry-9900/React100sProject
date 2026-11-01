import React, { useState } from 'react';

// প্রাইম চেক করার ফাংশন
function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    const limit = Math.floor(Math.sqrt(n));
    for (let i = 3; i <= limit; i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

export default function PrimeChecker() {
    const [number, setNumber] = useState('');
    const [result, setResult] = useState(null);

    const handleInputChange = (e) => {
        const val = e.target.value;
        setNumber(val);

        if (val === '') {
            setResult(null);
            return;
        }

        const num = parseInt(val, 10);
        if (!isNaN(num)) {
            setResult(isPrime(num));
        } else {
            setResult(null);
        }
    };

    return (
        <div style={{ fontFamily: 'sans-serif', maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <h2>মৌলিক সংখ্যা পরীক্ষক (Prime Checker)</h2>
            <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>একটি সংখ্যা লিখুন:</label>
                <input
                    type="number"
                    value={number}
                    onChange={handleInputChange}
                    placeholder="যেমন: 17"
                    style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }}
                />
            </div>

            {number !== '' && result !== null && (
                <div style={{ padding: '10px', borderRadius: '4px', backgroundColor: result ? '#d4edda' : '#f8d7da', color: result ? '#155724' : '#721c24' }}>
                    <strong>{number}</strong> {result ? 'একটি মৌলিক সংখ্যা! 🎉' : 'মৌলিক সংখ্যা নয়। ❌'}
                </div>
            )}
        </div>
    );
}
