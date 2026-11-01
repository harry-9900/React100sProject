import React from 'react'

const L52 = () => {
    const isPalindrome = (str) => {
        const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        const reversedStr = cleanedStr.split('').reverse().join('');
        return cleanedStr === reversedStr;
    }

  return (
    <div>
      <h1>Function দিয়ে Palindrome পরীক্ষা করা।</h1>
      <p>"racecar" is: {isPalindrome("racecar") ? 'Palindrome' : 'Not Palindrome'}</p>
      <p>"helleh" is: {isPalindrome("helleh") ? 'Palindrome' : 'Not Palindrome'}</p>
      <p>"madam" is: {isPalindrome("madam") ? 'Palindrome' : 'Not Palindrome'}</p>
    </div>
  )
}

export default L52
