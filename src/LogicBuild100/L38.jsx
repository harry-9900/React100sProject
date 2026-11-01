import React from 'react'

const L37 = () => {
    // ১. প্রথমে GCD বের করার ফাংশন
    const findGCD = (a, b) => {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // ২. GCD ব্যবহার করে LCM বের করার ফাংশন
    const findLCM = (a, b) => {
        return (a * b) / findGCD(a, b);
    }

    let num1 = 4;
    let num2 = 6;
    let lcmResult = findLCM(num1, num2);

  return (
    <div>
      <h1>দুটি সংখ্যার LCM (লসাগু) নির্ণয়</h1>
      <p>সংখ্যা দুটি: {num1} এবং {num2}</p>
      <p>LCM হলো: <strong>{lcmResult}</strong></p> {/* আউটপুট দেখাবে: 12 */}
    </div>
  )
}

export default L37