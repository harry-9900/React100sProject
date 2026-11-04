import React from 'react'

const L81 = () => {
    const str = "Hello World";
    const uniqueChars = [...new Set(str.split(''))].join('');
  return (
    <div>
      <h1>Duplicate Characters বাদ দেওয়া।</h1>
      <p>স্ট্রিং: {str}</p>
      <p>Unique Characters: {uniqueChars}</p>
    </div>
  )
}

export default L81
