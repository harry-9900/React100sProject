import React, { useState } from 'react';

export default function RangeChecker() {
  const [num, setNum] = useState('');
  const min = 10;
  const max = 50;

  const parsedNum = Number(num);
  const isValidInput = num !== '' && !isNaN(parsedNum);
  const isInRange = isValidInput && parsedNum >= min && parsedNum <= max;

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '350px' }}>
      <h3>সীমা পরীক্ষা ({min} থেকে {max})</h3>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        placeholder="একটি সংখ্যা লিখুন"
        style={{ padding: '8px', width: '100%', marginBottom: '10px' }}
      />

      {isValidInput && (
        <div style={{
          padding: '10px',
          borderRadius: '5px',
          color: 'white',
          backgroundColor: isInRange ? '#2e7d32' : '#c62828'
        }}>
          {isInRange 
            ? `হ্যাঁ, ${parsedNum} সংখ্যাটি ${min} থেকে ${max} এর মধ্যে আছে।` 
            : `না, ${parsedNum} সংখ্যাটি সীমার বাইরে!`}
        </div>
      )}
    </div>
  );
}