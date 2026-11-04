import React from 'react'

const L84 = () => {
    const sentence = "i React learning.";
    const capitalizedWords = sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return (
    <div>
      <h1>প্রতিটি Word-এর প্রথম অক্ষর Capital করা।</h1>
      <p>সেন্টেন্স: {sentence}</p>
      <p>Capitalized Words: {capitalizedWords.join(' ')}</p>
    </div>
  )
}

export default L84
