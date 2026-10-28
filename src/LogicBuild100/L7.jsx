import React, { useState } from 'react';

const Calculator = () => {
  // স্টেটগুলো ডিফাইন করা
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(null);

  // আপনার দেওয়া লজিক ফাংশনটি এখানে ব্যবহার করা হয়েছে
  const calculate = (n1, n2, op) => {
    let val1 = Number(n1);
    let val2 = Number(n2);

    if (op === '+') return val1 + val2;
    if (op === '-') return val1 - val2;
    if (op === '*') return val1 * val2;
    if (op === '/') return val1 / val2;

    if (op === '/') {
      if (val2 === 0) return "শূন্য দিয়ে ভাগ করা যায় না!";
      return val1 / val2;

    }
    if (op === '%') return val1 % val2;
    return "অবৈধ অপারেটর";
  };

  // '=' বাটন ক্লিক করলে বা ফর্ম সাবমিট হলে হিসাব করার ফাংশন
  const handleSubmit = (e) => {
    e.preventDefault(); // পেজ রিলোড হওয়া বন্ধ করবে
    
    // যদি ইনপুট খালি থাকে
    if (num1 === '' || num2 === '') {
      setResult('দয়া করে দুটি সংখ্যাই লিখুন!');
      return;
    }

    const res = calculate(num1, num2, operator);
    setResult(res);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '300px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>সিম্পল ক্যালকুলেটর</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {/* প্রথম সংখ্যা ইনপুট */}
        <div>
          <label>প্রথম সংখ্যা: </label>
          <input 
            type="number" 
            value={num1} 
            onChange={(e) => setNum1(e.target.value)} 
            placeholder="সংখ্যা দিন"
            style={{ width: '100%', padding: '5px' }}
          />
        </div>

        {/* অপারেটর নির্বাচন করার জন্য ড্রপডাউন */}
        <div>
          <label>অপারেটর: </label>
          <select 
            value={operator} 
            onChange={(e) => setOperator(e.target.value)}
            style={{ width: '100%', padding: '5px' }}
          >
            <option value="+">(+) যোগ</option>
            <option value="-">(-) বিয়োগ</option>
            <option value="*">(*) গুণ</option>
            <option value="/">( / ) ভাগ</option>
            <option value="%">( % ) %</option>
          </select>
        </div>

        {/* দ্বিতীয় সংখ্যা ইনপুট */}
        <div>
          <label>দ্বিতীয় সংখ্যা: </label>
          <input 
            type="number" 
            value={num2} 
            onChange={(e) => setNum2(e.target.value)} 
            placeholder="সংখ্যা দিন"
            style={{ width: '100%', padding: '5px' }}
          />
        </div>

        {/* সাবমিট বাটন */}
        <button type="submit" style={{ padding: '8px', background: '#007BFF', color: 'white', border: 'none', cursor: 'pointer' }}>
          হিসাব করুন (=)
        </button>
      </form>

      {/* ফলাফল প্রদর্শন */}
      {result !== null && (
        <div style={{ marginTop: '20px', padding: '10px', background: '#f1f1f1', borderRadius: '5px' }}>
          <h3>ফলাফল: {result}</h3>
        </div>
      )}
    </div>
  );
};

export default Calculator;
