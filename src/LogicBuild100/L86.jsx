import React from 'react'

const L86 = () => {
    const sentence = "i React learning.";
    const charCount = {};
    for (let char of sentence) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    const mostFrequentChar = Object.keys(charCount).reduce((a, b) => charCount[a] > charCount[b] ? a : b);
  return (
    <div>
      <h1>সবচেয়ে বেশি ব্যবহৃত Character বের করা।</h1>
      <p>সেন্টেন্স: {sentence}</p>
      <p>Most Frequent Character: {mostFrequentChar}</p>
    </div>
  )
}

export default L86
