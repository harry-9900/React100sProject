import React from 'react'

const L89 = () => {
    const sentence = "i React learning.";
    const words = sentence.split(' ');
    const largestWord = words.reduce((largest, current) => {
        return current.length > largest.length ? current : largest;
    }, "");
  return (
    <div>
      <h1>Sentence-এর সবচেয়ে বড় Word বের করা।</h1>
      <p>Sentence: {sentence}</p>
      <p>Largest Word: {largestWord}</p>
    </div>
  )
}

export default L89
