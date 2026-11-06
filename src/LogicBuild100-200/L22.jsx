import React from 'react'

const L22 = () => {
   const longestConsecutive = (nums) => {
    // ১. যদি অ্যারে খালি হয়, তবে দৈর্ঘ্য ০ রিটার্ন করো
    if (!nums || nums.length === 0) {
        return 0;
    }

    // ২. সব সংখ্যা একটি Set-এ রূপান্তর করা (ডুপ্লিকেট দূর করতে এবং দ্রুত খোঁজার জন্য O(1))
    const numSet = new Set(nums);
    let longestStreak = 0;

    // ৩. প্রতিটি সংখ্যার ওপর লুপ চালানো
    for (let num of numSet) {
        // ৪. চেক করা এটি কোনো সিকোয়েন্সের শুরু কি না (অর্থাৎ, num - 1 সেটে আছে কি না)
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            // ৫. পরবর্তী ধারাবাহিক সংখ্যাগুলো সেটে আছে কি না তা গুণে দেখা
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            // ৬. দীর্ঘতম সিকোয়েন্সের দৈর্ঘ্য আপডেট করা
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
};

// --- উদাহরণ ও টেস্ট ---
const array = [100, 4, 200, 1, 3, 2];
console.log("Longest Consecutive Sequence Length:", longestConsecutive(array)); 
// আউটপুট আসবে: 4

  return (
    <div>
      <h1>Array-এর Longest Consecutive Sequence বের করো।
        <p>Array: {JSON.stringify(array)}</p>
        <p>Longest Consecutive Sequence Length: {longestConsecutive(array)}</p>
      </h1>
    </div>
  )
}

export default L22
