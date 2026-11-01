import React from 'react'

const L43 = () => {
    const numberTriangle = (rows) => {
        let result = '';
        
        for (let i = 1; i <= rows; i++) {
            // ১ নম্বর ভেতরের লুপ: সংখ্যার আগে খালি জায়গা (Spaces) দেওয়ার জন্য
            // যত নিচের লাইনে যাবে, স্পেস তত কমবে (৬, ৫, ৪, ৩, ২, ১, ০)
            for (let j = 1; j <= (rows - i); j++) {
                result += ' '; // একটি খালি স্পেস
            }
            
            // ২ নম্বর ভেতরের লুপ: সংখ্যাগুলো প্রিন্ট করার জন্য
            // i = ১ হলে ১ পর্যন্ত, i = ২ হলে ২ পর্যন্ত প্রিন্ট করবে এবং মাঝে একটি করে স্পেস থাকবে
            for (let k = 1; k <= i; k++) {
                result += k + ' '; 
            }
            
            result += '\n'; // লাইন শেষে নতুন লাইনে যাওয়ার জন্য
        }

        return result;
    };
    
    const triangle = numberTriangle(7);
    
    return (
        <div style={{ padding: '20px' }}>
            <h1>Number Triangle Pattern তৈরি করা (মাঝখানে এলাইনড)।</h1>
            {/* ফন্ট ফ্যামিলি monospace রাখা জরুরি যাতে প্রতিটা স্পেস ও অক্ষরের সাইজ সমান থাকে */}
            <pre style={{ fontFamily: 'monospace', fontSize: '18px', lineHeight: '1.4' }}>
                {triangle}
            </pre>
        </div>
        
    )
}

export default L43

