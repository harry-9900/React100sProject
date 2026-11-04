import React from 'react'

const L80 = () => {
    const str = "Hello World";
    const frequency = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        frequency[char] = (frequency[char] || 0) + 1;
    }
  return (
    <div>
      <h1>প্রতিটি Character-এর Frequency গণনা করা।</h1>
      <p>স্ট্রিং: {str}</p>
      <p>Frequency:</p>
      <ul>
        {Object.entries(frequency).map(([char, count]) => (
          <li key={char}>
            '{char}': {count}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default L80
