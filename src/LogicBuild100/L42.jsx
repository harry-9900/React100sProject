import React from 'react';

const L42 = () => {
  const invertedFullPyramid = (rows) => {
    let result = '';
    
    // বাইরের লুপ: ০ থেকে rows-1 পর্যন্ত চলবে (০, ১, ২...)
    for (let i = 0; i < rows; i++) {
      
      // ১ম ভেতরের লুপ: লাইনের শুরুতে স্পেস দেওয়ার জন্য
      // যত নিচের লাইন, স্পেস তত বাড়বে (০, ১, ২, ৩...)
      for (let j = 0; j < i; j++) {
        result += ' '; // একটি স্পেস
      }
      
      // ২য় ভেতরের লুপ: মাঝখানে স্টার প্রিন্ট করার জন্য
      // বিজোড় সংখ্যায় স্টার কমবে: (২ * (rows - i) - 1)
      // rows = 7 হলে প্রথম লাইনে: (২ * ৭) - ১ = ১৩টি স্টার
      for (let k = 1; k <= (2 * (rows - i) - 1); k++) {
        result += '*';
      }
      
      result += '\n'; // লাইন শেষ হলে নতুন লাইনে যাওয়ার জন্য
    }
    return result;
  };

  // ৭ লাইনের মাঝখানে থাকা উল্টো ত্রিভুজ
  const triangle = invertedFullPyramid(7);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Inverted Star Triangle তৈরি করা (মাঝখানে এলাইনড)।</h1>
      {/* monospace ফন্ট ব্যবহার করা জরুরি যাতে স্পেস এবং স্টারগুলোর সাইজ সমান হয় */}
      <pre style={{ fontFamily: 'monospace', fontSize: '18px', lineHeight: '1.2' }}>
        {triangle}
      </pre>
    </div>
  );
};

export default L42;

