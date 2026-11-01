import React from 'react'

const L14 = () => {


    function customAbs(number) {
    if (number < 0) {
        return -number; // ঋণাত্মক সংখ্যাকে ধনাত্মক করার জন্য সামনে মাইনাস (-) যোগ করা হয়েছে (- - ১০ = + ১০)
    } else {
        return number;  // ধনাত্মক বা ০ হলে অপরিবর্তিত থাকবে
    }
}

// পরীক্ষা করে দেখা যাক:
console.log(customAbs(-10));  // আউটপুট: 10
console.log(customAbs(15));   // আউটপুট: 15
console.log(customAbs(-5.5)); // আউটপুট: 5.5

    const custtomAbs = (num) => (num < 0 ? -num : num);


  return (
    <div>
      <h1>সংখ্যার Absolute Value বের করা।</h1>
      <p>{custtomAbs(-10)}</p>
    </div>
  )
}

export default L14
