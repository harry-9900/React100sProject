

const L26 = () => {
  // নামতা তৈরির ফাংশন
  const multiplication = (number) => {
    // যদি কোনো সংখ্যা পাস না করা হয়, তবে ডিফল্ট হিসেবে ৫ ধরে নেবে
    const num = number || 5; 
    
    console.log(`${num}-এর ঘরের নামতা:`);
    
    // সঠিক লুপ: i++ এর মাধ্যমে i এর মান ১ করে বাড়বে
    for (let i = 1; i <= 10; i++) {
      const result = num * i;
      console.log(`${num} x ${i} = ${result}`);
    }
  };

  // ফাংশনটি কল করার সময় ব্র্যাকেটে সংখ্যা (যেমন: ৫) পাঠিয়ে দিন
  multiplication(5); 

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>একটি সংখ্যার Multiplication Table তৈরি করা।</h1>
      <p>ফলাফল দেখতে আপনার ব্রাউজারের <b>Console</b> (F12) চেক করুন।</p>
    </div>
  );
};

export default L26;
