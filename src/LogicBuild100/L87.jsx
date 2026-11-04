import React from 'react'

const L87 = () => {
    const str1 = "listen";
    const str2 = "silent";
    const areAnagrams = str1.split('').sort().join('') === str2.split('').sort().join('');  
  return (
    <div>
      <h1>দুটি String Anagram কি না পরীক্ষা করা।</h1>
      <p>String 1: {str1}</p>
      <p>String 2: {str2}</p>
      <p>Are Anagrams: {areAnagrams.toString()}</p>
    </div>
  )
}

export default L87
