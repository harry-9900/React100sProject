import React from 'react'

const L82 = () => {
    const sentence = "আমি React শিখছি।";
    const wordCount = sentence.split(' ').length;
  return (
    <div>
      <h1>Sentence-এর Word সংখ্যা গণনা করা।</h1>
      <p>সেন্টেন্স: {sentence}</p>
      <p>Word Count: {wordCount}</p>
    </div>
  )
}

export default L82
