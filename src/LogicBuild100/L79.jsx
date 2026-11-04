import React from 'react'

const L79 = () => {
    const String = "HelleH";
    const reversedString = String.split('').reverse().join('');
    const isPalindrome = String === reversedString;
  return (
    <div>
      <h1>String Palindrome কি না পরীক্ষা করা।</h1>
      <p>স্ট্রিং: {String}</p>
      <p>উল্টো: {reversedString}</p>
      <p>Palindrome?: {isPalindrome ? 'হ্যাঁ' : 'না'}</p>
    </div>
  )
}

export default L79
