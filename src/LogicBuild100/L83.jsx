import React from 'react'

const L83 = () => {
    const sentence = "আমি React শিখছি।";
    const reversedWords = sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');
  return (
    <div>
      <h1>Sentence-এর প্রতিটি Word Reverse করা।</h1>
      <p>সেন্টেন্স: {sentence}</p>
      <p>Reversed Words: {reversedWords}</p>
    </div>
  )
}

export default L83
