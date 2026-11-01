import React from 'react'

const L34 = () => {
    const Palindrome = (srt) => {
        let original = srt.toString();
        let reversed = original.split('').reverse().join('')

        return original === reversed
    }
    let numberTest = "asa";
    let isPalindrome = Palindrome(numberTest);
  return (
    <div>
      <h1>সংখ্যা Palindrome কি না পরীক্ষা করা।</h1>
      <p>সংখ্যাটি: {numberTest}</p>
      <p>এটি কি প্যালিন্ড্রোম? <strong>{isPalindrome ? "হ্যাঁ (True)" : "না (False)"}</strong></p>

    </div>
  )
}

export default L34
