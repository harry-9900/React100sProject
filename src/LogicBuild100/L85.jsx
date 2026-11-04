import React from 'react'

const L85 = () => {
    const sentence = "i React learning.";
    const word = "React";
    const wordExists = sentence.includes(word);
  return (
    <div>
      <h1>String-এ নির্দিষ্ট Word আছে কি না পরীক্ষা করা।</h1>
      <p>সেন্টেন্স: {sentence}</p>
      <p>Word: {word}</p>
      <p>Word Exists: {wordExists.toString()}</p>
    </div>
  )
}

export default L85
