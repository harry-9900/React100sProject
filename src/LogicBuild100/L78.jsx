import React from 'react'

const L78 = () => {
    const String = "Hello, World!";
    let vowel_count = 0;
    let consonant_count = 0;
    const vowels = 'aeiouAEIOU';
    for (let i = 0; i < String.length; i++) {
        if (vowels.indexOf(String[i]) !== -1) {
            vowel_count++;
        } else {
            consonant_count++;
        }
    }
  return (
    <div>
      <p>স্ট্রিং: {String}</p>
      <p>বর্ণমালা: {vowel_count}</p>
      <p>ব্যঞ্জন: {consonant_count}</p>
    </div>
  )
}

export default L78
