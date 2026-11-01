import React from 'react'

const L35 = () => {
    // আর্মস্ট্রং সংখ্যা চেক করার ফাংশন
    const checkArmstrong = (num) => {
        let strNum = num.toString();
        let len = strNum.length; // মোট কতটি ডিজিট আছে তা বের করা
        
        let sum = strNum
            .split('')
            .reduce((acc, curr) => acc + Math.pow(Number(curr), len), 0);
            
        return sum === num; // মূল সংখ্যার সাথে যোগফল মিললে true দেখাবে
    }

    let numberTest = 150;
    let isArmstrong = checkArmstrong(numberTest);

  return (
    <div>
      <h1>আর্মস্ট্রং সংখ্যা (Armstrong Number) চেক করা</h1>
      <p>সংখ্যাটি: {numberTest}</p>
      <p>এটি কি আর্মস্ট্রং সংখ্যা? <strong>{isArmstrong ? "হ্যাঁ (True)" : "না (False)"}</strong></p>
    </div>
  )
}

export default L35