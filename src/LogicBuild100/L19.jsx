import React from 'react'
// 1. \(a + b > c\) (যে কোনো দুই বাহুর দৈর্ঘ্যের সমষ্টি তৃতীয় বাহু অপেক্ষা বৃহত্তর হতে হবে)
// 2. \(a + c > b\)
// 3. \(b + c > a\)

const L19 = () => {
  // ত্রিভুজ গঠন সম্ভব কি না তা চেক করার ফাংশন
  const checkTriangle = (a, b, c) => {
    if (a + b > c && a + c > b && b + c > a) {
      return "হ্যাঁ, ত্রিভুজ তৈরি সম্ভব!";
    } else {
      return "না, ত্রিভুজ তৈরি সম্ভব নয়।";
    }
  };

  // বাহুগুলোর দৈর্ঘ্য দিয়ে ফাংশন কল করা হলো
  const result = checkTriangle(6, 4, 7);

  return (
    <div>
      <h1>তিনটি বাহু দিয়ে ত্রিভুজ তৈরি সম্ভব কি না পরীক্ষা করা</h1>
      <p>{result}</p>
    </div>
  );
};

export default L19;
