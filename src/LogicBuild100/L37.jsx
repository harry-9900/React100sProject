import React from 'react'

const L36 = () => {
    // ইউক্লিডিয়ান পদ্ধতিতে GCD/HCF বের করার ফাংশন
    const findGCD = (a, b) => {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    let num1 = 12;
    let num2 = 18;
    let gcdResult = findGCD(num1, num2);

  return (
    <div>
      <h1>দুটি সংখ্যার GCD / HCF (গসাগু) নির্ণয়</h1>
      <p>সংখ্যা দুটি: {num1} এবং {num2}</p>
      <p>GCD / HCF হলো: <strong>{gcdResult}</strong></p> {/* আউটপুট দেখাবে: 6 */}
    </div>
  )
}

export default L36