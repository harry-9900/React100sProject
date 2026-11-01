import React, { useState } from 'react';

export default function DivisibilityChecker() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);

  const handleCheck = (e) => {
    e.preventDefault();
    const num = Number(number);

    if (number === '' || isNaN(num)) {
      setResult(null);
      return;
    }

    const quotient = Math.floor(num / 5);
    const remainder = num % 5;
    const isDivisible = remainder === 0;

    setResult({
      num,
      quotient,
      remainder,
      isDivisible
    });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '400px', margin: 'auto' }}>
      <h2>৫ দিয়ে বিভাজ্যতা চেক</h2>
      <form onSubmit={handleCheck} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="একটি সংখ্যা লিখুন"
          style={{ padding: '8px', flex: '1', fontSize: '16px' }}
        />
        <button type="submit" style={{ padding: '8px 16px', fontSize: '16px', cursor: 'pointer' }}>
          চেক করুন
        </button>
      </form>

      {result !== null && (
        <div style={{ background: '#f4f4f4', padding: '15px', borderRadius: '5px' }}>
          <p><strong>সংখ্যা:</strong> {result.num}</p>
          <p><strong>ভাগফল:</strong> {result.quotient}</p>
          <p><strong>ভাগশেষ:</strong> {result.remainder}</p>
          <p>
            <strong>৫ দিয়ে বিভাজ্য?</strong>{' '}
            <span style={{ color: result.isDivisible ? 'green' : 'red', fontWeight: 'bold' }}>
              {result.isDivisible ? 'হ্যাঁ (বিভাজ্য)' : 'না (বিভাজ্য নয়)'}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}