import { useState } from 'react';

const L1 = () => {
  // রেজাল্ট সেভ করার জন্য state তৈরি করা হলো
  const [all, setAll] = useState(null);

  // বাটন ক্লিক করলে এই ফাংশনটি কাজ করবে
  const handleSumClick = (n1, n2) => {
    const sumResult = n1 * n2; // এখানে গুণ করা হচ্ছে
    setAll(sumResult);        // state-এ মান সেট করা হচ্ছে
  };

  return (
    <div>
      <h1>Logic Build 001</h1>
      <h3>10 * 20</h3>
      {/* বাটন যোগ করা হলো */}
      <button onClick={() => handleSumClick(10, 20)}>Show Sum</button>

      {/* যদি all-এ মান থাকে, তবেই ফলাফল দেখাবে */}
      {all !== null && <h2>Sum: {all}</h2>}
    </div>
  );
}

export default L1;