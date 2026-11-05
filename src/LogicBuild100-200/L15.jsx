import React from 'react';

const L15 = () => {
    // ১. সংখ্যাটি প্যালিনড্রোম কি না তা চেক করার ফাংশন
    const isPalindrome = (num) => {
        const str = num.toString();
        const reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
    };

    // ২. নির্দিষ্ট সীমার মধ্যে প্যালিনড্রোম সংখ্যাগুলো বের করার ফাংশন
    const getPalindromesInRange = (start, end) => {
        const palindromes = [];
        for (let i = start; i <= end; i++) {
            if (isPalindrome(i)) {
                palindromes.push(i);
            }
        }
        return palindromes;
    };

    const start = 1;
    const end = 150;
    const palindromeList = getPalindromesInRange(start, end);

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1>নির্দিষ্ট সীমার মধ্যে Palindromic Number বের করো</h1>
            <p>সীমা (Range): {start} থেকে {end}</p>
            <p><strong>Palindromic Numbers:</strong> {palindromeList.join(', ')}</p>
            <p>মোট প্যালিনড্রোম সংখ্যা পাওয়া গেছে: {palindromeList.length}টি</p>
        </div>
    );
};

export default L15;