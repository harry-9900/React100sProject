import React from 'react'

const L88 = () => {
    const str = "Hello World";
    const stringWithoutSpaces = str.replace(/\s/g, '');
  return (
    <div>
      <h1>String থেকে সব Space বাদ দেওয়া।</h1>
      <p>Original String: {str}</p>
      <p>String without Spaces: {stringWithoutSpaces}</p>
    </div>
  )
}

export default L88
